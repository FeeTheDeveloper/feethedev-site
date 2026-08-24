'use client';

import { Environment, Float, Lightformer } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import type { CSSProperties, MutableRefObject } from 'react';
import { Suspense, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import * as THREE from 'three';

type FuturisticRubiksCubeProps = {
  className?: string;
  style?: CSSProperties;
};

const BACKGROUND = '#0A0A0A';
const CUBIE_SIZE = 0.62;
const CUBIE_GAP = 0.085;
const CUBIE_STEP = CUBIE_SIZE + CUBIE_GAP;

// Reuse the same geometry for every cubie so the scene stays lightweight.
const CORE_GEOMETRY = new THREE.BoxGeometry(
  CUBIE_SIZE,
  CUBIE_SIZE,
  CUBIE_SIZE,
  1,
  1,
  1,
);
const EDGE_GEOMETRY = new THREE.EdgesGeometry(CORE_GEOMETRY);
const GRID = [-1, 0, 1] as const;
const CUBIE_POSITIONS = GRID.flatMap((x) =>
  GRID.flatMap((y) =>
    GRID.flatMap((z) =>
      x === 0 && y === 0 && z === 0
        ? []
        : [
            [x * CUBIE_STEP, y * CUBIE_STEP, z * CUBIE_STEP] as [
              number,
              number,
              number,
            ],
          ],
    ),
  ),
);

function SceneFallback() {
  return (
    <group scale={1.1}>
      <mesh geometry={CORE_GEOMETRY}>
        <meshBasicMaterial color="#8b949f" wireframe />
      </mesh>
      <lineSegments geometry={EDGE_GEOMETRY}>
        <lineBasicMaterial
          color="#00FF88"
          transparent
          opacity={0.45}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

function LightingRig() {
  return (
    <>
      <ambientLight intensity={0.45} />
      <hemisphereLight intensity={0.4} groundColor="#050505" color="#d8e2ff" />
      <directionalLight
        position={[4.5, 6.5, 5]}
        intensity={2.2}
        color="#ffffff"
      />
      <pointLight
        position={[-3.2, 1.2, 4]}
        intensity={1.15}
        color="#FF2B2B"
        distance={10}
      />
      <pointLight
        position={[3.4, -1.8, 4.6]}
        intensity={1.3}
        color="#00FF88"
        distance={10}
      />
      <Environment resolution={128}>
        <Lightformer
          intensity={2.4}
          color="#ffffff"
          position={[4, 4, 5]}
          scale={[10, 10, 1]}
        />
        <Lightformer
          intensity={1.65}
          color="#cfd6df"
          position={[-5, 1, 3]}
          rotation-y={Math.PI / 2}
          scale={[12, 12, 1]}
        />
        <Lightformer
          intensity={1.35}
          color="#FF2B2B"
          position={[-2.5, -3, 2]}
          rotation-x={Math.PI / 3}
          scale={[6, 6, 1]}
        />
        <Lightformer
          intensity={1.35}
          color="#00FF88"
          position={[2.8, -2.5, 2]}
          rotation-x={Math.PI / 3}
          scale={[6, 6, 1]}
        />
      </Environment>
    </>
  );
}

function Cubie({
  position,
  edgeColor,
  glowIndex,
  glowMaterials,
}: {
  position: [number, number, number];
  edgeColor: string;
  glowIndex: number;
  glowMaterials: MutableRefObject<(THREE.LineBasicMaterial | null)[]>;
}) {
  const roughness = 0.18 + Math.abs(position[1]) * 0.04;
  const metalTint = 0.82 + (position[0] + position[2]) * 0.03;

  return (
    <group position={position}>
      <mesh geometry={CORE_GEOMETRY} castShadow={false} receiveShadow={false}>
        <meshPhysicalMaterial
          color={new THREE.Color(metalTint, metalTint, metalTint + 0.04)}
          metalness={1}
          roughness={roughness * 0.88}
          clearcoat={1}
          clearcoatRoughness={0.08}
          ior={2.2}
          envMapIntensity={2.4}
          sheen={0.35}
          sheenRoughness={0.28}
          sheenColor="#f5f7fb"
        />
      </mesh>
      <lineSegments geometry={EDGE_GEOMETRY} renderOrder={2}>
        <lineBasicMaterial
          ref={(material) => {
            glowMaterials.current[glowIndex] = material;
          }}
          color={edgeColor}
          transparent
          opacity={0.24}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </lineSegments>
    </group>
  );
}

function RubiksCube() {
  const cubeGroup = useRef<THREE.Group>(null);
  const glowMaterials = useRef<(THREE.LineBasicMaterial | null)[]>([]);

  useFrame((state, delta) => {
    if (!cubeGroup.current) {
      return;
    }

    cubeGroup.current.rotation.x += delta * 0.14;
    cubeGroup.current.rotation.y += delta * 0.24;

    // Drive both glow colors from the same clock to keep the pulse smooth.
    const pulse =
      0.18 + (Math.sin(state.clock.elapsedTime * 1.6) + 1) * 0.5 * 0.2;
    const alternate =
      0.13 + (Math.sin(state.clock.elapsedTime * 2.2 + 1.2) + 1) * 0.5 * 0.16;
    const scalePulse =
      0.985 + (Math.sin(state.clock.elapsedTime * 1.4) + 1) * 0.5 * 0.018;

    cubeGroup.current.scale.setScalar(scalePulse);

    glowMaterials.current.forEach((material, index) => {
      if (!material) {
        return;
      }

      material.opacity = index % 2 === 0 ? pulse : alternate;
    });
  });

  return (
    <Float speed={0.9} rotationIntensity={0.08} floatIntensity={0.12}>
      <group ref={cubeGroup}>
        {CUBIE_POSITIONS.map((position, index) => (
          <Cubie
            key={`${position[0]}-${position[1]}-${position[2]}`}
            position={position}
            edgeColor={index % 2 === 0 ? '#FF2B2B' : '#00FF88'}
            glowIndex={index}
            glowMaterials={glowMaterials}
          />
        ))}
      </group>
    </Float>
  );
}

export function FuturisticRubiksCube({
  className,
  style,
}: FuturisticRubiksCubeProps) {
  return (
    <div
      className={className}
      style={{
        width: '100%',
        minHeight: '320px',
        aspectRatio: '1 / 1',
        background: BACKGROUND,
        ...style,
      }}
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [4.8, 4.2, 5.8], fov: 34 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        performance={{ min: 0.75 }}
      >
        <color attach="background" args={[BACKGROUND]} />
        <Suspense fallback={<SceneFallback />}>
          <LightingRig />
          <RubiksCube />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default FuturisticRubiksCube;
