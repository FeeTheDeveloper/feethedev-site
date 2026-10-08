'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/** Brand tokens from DESIGN.md / tailwind.config.ts. Orange stays rare. */
const ELECTRIC = new THREE.Color('#2578FF');
const CYAN = new THREE.Color('#22D3EE');
const GREEN = new THREE.Color('#14E8B4');
const ORANGE = new THREE.Color('#FF6B35');
const BACKGROUND = '#05070B';

// Plain three.js on purpose: @react-three/fiber v8 cannot run on the React 19
// runtime bundled with Next 15, and this scene needs no React reconciler.

/** Each node links to its nearest neighbours to form the signal mesh. */
const LINKS_PER_NODE = 3;

type Density = { nodes: number; pulses: number };

type Graph = {
  points: THREE.Vector3[];
  colors: THREE.Color[];
  sizes: number[];
  edges: [number, number][];
  adjacency: number[][];
};

// Deterministic PRNG so the composition is identical on every visit.
function mulberry32(seed: number): () => number {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildGraph(count: number): Graph {
  const rand = mulberry32(2578);
  const points: THREE.Vector3[] = [];
  const colors: THREE.Color[] = [];
  const sizes: number[] = [];

  for (let i = 0; i < count; i += 1) {
    // Points in a wide, shallow ellipsoid shell so the field reads as depth
    // behind the headline instead of a ball in the middle of it.
    const u = rand() * 2 - 1;
    const theta = rand() * Math.PI * 2;
    const radius = 0.5 + rand() * 0.5;
    const ring = Math.sqrt(1 - u * u);
    points.push(
      new THREE.Vector3(
        ring * Math.cos(theta) * radius * 6.2,
        u * radius * 2.9,
        ring * Math.sin(theta) * radius * 2.6,
      ),
    );

    const pick = rand();
    colors.push(
      i % 11 === 0
        ? ORANGE
        : pick < 0.46
          ? ELECTRIC
          : pick < 0.76
            ? CYAN
            : GREEN,
    );
    sizes.push(0.026 + rand() * 0.032);
  }

  const seen = new Set<string>();
  const edges: [number, number][] = [];
  const adjacency: number[][] = points.map(() => []);

  points.forEach((point, i) => {
    points
      .map((other, j) => ({ j, d: point.distanceToSquared(other) }))
      .filter(({ j }) => j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, LINKS_PER_NODE)
      .forEach(({ j }) => {
        const key = i < j ? `${i}:${j}` : `${j}:${i}`;
        if (seen.has(key)) return;
        seen.add(key);
        edges.push([i, j]);
        adjacency[i].push(j);
        adjacency[j].push(i);
      });
  });

  return { points, colors, sizes, edges, adjacency };
}

type Pulse = { from: number; to: number; t: number; speed: number };

function createNodes(
  graph: Graph,
  scaleFactor: number,
  material: THREE.Material,
) {
  const mesh = new THREE.InstancedMesh(
    new THREE.SphereGeometry(1, 12, 12),
    material,
    graph.points.length,
  );
  const matrix = new THREE.Matrix4();
  const rotation = new THREE.Quaternion();
  const scale = new THREE.Vector3();

  graph.points.forEach((point, i) => {
    scale.setScalar(graph.sizes[i] * scaleFactor);
    mesh.setMatrixAt(i, matrix.compose(point, rotation, scale));
    mesh.setColorAt(i, graph.colors[i]);
  });

  return mesh;
}

function createLinks(graph: Graph) {
  const positions = new Float32Array(graph.edges.length * 6);
  const colors = new Float32Array(graph.edges.length * 6);

  graph.edges.forEach(([a, b], i) => {
    graph.points[a].toArray(positions, i * 6);
    graph.points[b].toArray(positions, i * 6 + 3);
    graph.colors[a].toArray(colors, i * 6);
    graph.colors[b].toArray(colors, i * 6 + 3);
  });

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  return new THREE.LineSegments(
    geometry,
    new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    }),
  );
}

type SignalFieldProps = {
  /** Pauses rendering when false (e.g. scrolled out of view). */
  active: boolean;
  density: Density;
  onReady?: () => void;
};

export default function SignalField({
  active,
  density,
  onReady,
}: SignalFieldProps) {
  const host = useRef<HTMLDivElement>(null);
  const activeRef = useRef(active);
  const startLoop = useRef<() => void>(() => {});
  const readyRef = useRef(onReady);
  readyRef.current = onReady;

  useEffect(() => {
    activeRef.current = active;
    if (active) startLoop.current();
  }, [active]);

  useEffect(() => {
    const container = host.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'low-power',
      });
    } catch {
      return; // No usable WebGL context: the static backdrop stays.
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(BACKGROUND, 6.5, 14);
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 50);
    camera.position.set(0, 0, 8.5);

    const graph = buildGraph(density.nodes);
    const group = new THREE.Group();
    scene.add(group);

    group.add(createLinks(graph));
    group.add(
      createNodes(graph, 1, new THREE.MeshBasicMaterial({ toneMapped: false })),
    );
    group.add(
      createNodes(
        graph,
        2.4,
        new THREE.MeshBasicMaterial({
          toneMapped: false,
          transparent: true,
          opacity: 0.06,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        }),
      ),
    );

    // Bright packets that hop node-to-node along the links: the "signal".
    const pulseMesh = new THREE.InstancedMesh(
      new THREE.SphereGeometry(1, 10, 10),
      new THREE.MeshBasicMaterial({
        toneMapped: false,
        transparent: true,
        opacity: 0.95,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
      density.pulses,
    );
    group.add(pulseMesh);

    const rand = mulberry32(14);
    const pulses: Pulse[] = Array.from({ length: density.pulses }, () => {
      const [from, to] = graph.edges[Math.floor(rand() * graph.edges.length)];
      return { from, to, t: rand(), speed: 0.9 + rand() * 0.9 };
    });

    const matrix = new THREE.Matrix4();
    const position = new THREE.Vector3();
    const rotation = new THREE.Quaternion();
    const scale = new THREE.Vector3();

    const stepPulses = (delta: number) => {
      pulses.forEach((pulse, i) => {
        const a = graph.points[pulse.from];
        const b = graph.points[pulse.to];
        pulse.t += (delta * pulse.speed) / Math.max(a.distanceTo(b), 0.4);

        if (pulse.t >= 1) {
          // Continue onward from the node just reached; avoid bouncing back.
          const onward = graph.adjacency[pulse.to].filter(
            (n) => n !== pulse.from,
          );
          const pool = onward.length ? onward : graph.adjacency[pulse.to];
          pulse.from = pulse.to;
          pulse.to = pool[Math.floor(rand() * pool.length)];
          pulse.t = 0;
        }

        position.lerpVectors(
          graph.points[pulse.from],
          graph.points[pulse.to],
          pulse.t,
        );
        // Swell mid-flight so packets read as travelling energy, not dots.
        scale.setScalar(0.035 + Math.sin(pulse.t * Math.PI) * 0.035);
        pulseMesh.setMatrixAt(i, matrix.compose(position, rotation, scale));
        pulseMesh.setColorAt(i, graph.colors[pulse.to]);
      });

      pulseMesh.instanceMatrix.needsUpdate = true;
      if (pulseMesh.instanceColor) pulseMesh.instanceColor.needsUpdate = true;
    };

    // The layer sits under page content with pointer-events disabled, so the
    // parallax listens on the window instead of the canvas.
    const pointer = { x: 0, y: 0 };
    const onPointer = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onPointer, { passive: true });

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      if (!clientWidth || !clientHeight) return;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();

    const clock = new THREE.Clock();
    let elapsed = 0;
    let frame = 0;

    const tick = () => {
      frame = 0;
      if (!activeRef.current || document.hidden) {
        clock.stop();
        return;
      }

      const delta = Math.min(clock.getDelta(), 0.05);
      elapsed += delta;
      stepPulses(delta);

      const scroll = Math.min(window.scrollY / window.innerHeight, 1.5);
      const ease = 1 - Math.exp(-delta * 2.4);
      const targetY = elapsed * 0.035 + pointer.x * 0.22 + scroll * 0.5;
      const targetX = pointer.y * 0.12 + scroll * 0.18;

      group.rotation.y += (targetY - group.rotation.y) * ease;
      group.rotation.x += (targetX - group.rotation.x) * ease;
      // Drift back and up as the visitor scrolls past the hero.
      group.position.z += (-scroll * 2.2 - group.position.z) * ease;
      group.position.y += (scroll * 0.9 - group.position.y) * ease;

      renderer.render(scene, camera);
      frame = requestAnimationFrame(tick);
    };

    startLoop.current = () => {
      if (frame || !activeRef.current || document.hidden) return;
      clock.start();
      frame = requestAnimationFrame(tick);
    };
    const onVisibility = () => startLoop.current();
    document.addEventListener('visibilitychange', onVisibility);

    stepPulses(0);
    renderer.render(scene, camera);
    readyRef.current?.();
    startLoop.current();

    return () => {
      if (frame) cancelAnimationFrame(frame);
      startLoop.current = () => {};
      observer.disconnect();
      window.removeEventListener('pointermove', onPointer);
      document.removeEventListener('visibilitychange', onVisibility);
      scene.traverse((object) => {
        if (
          object instanceof THREE.Mesh ||
          object instanceof THREE.LineSegments
        ) {
          object.geometry.dispose();
          (object.material as THREE.Material).dispose();
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [density.nodes, density.pulses]);

  return <div ref={host} className="h-full w-full" />;
}
