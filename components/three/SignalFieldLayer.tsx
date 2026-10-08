'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

// three.js stays out of the initial bundle; it loads after hydration.
const SignalField = dynamic(() => import('./SignalField'), { ssr: false });

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') ?? canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

/**
 * Decorative 3D signal network for brand-led hero sections.
 *
 * Renders nothing for reduced-motion visitors or browsers without WebGL, so
 * the static gradient backdrop underneath remains the baseline experience.
 * Rendering pauses whenever the layer is scrolled out of view.
 */
export function SignalFieldLayer({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [ready, setReady] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setEnabled(!motion.matches && supportsWebGL());

    update();
    setCompact(window.matchMedia('(max-width: 639px)').matches);
    motion.addEventListener('change', update);
    return () => motion.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node || !enabled) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: '120px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [enabled]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        'pointer-events-none transition-opacity duration-[1400ms] ease-out',
        ready ? 'opacity-100' : 'opacity-0',
        className,
      )}
    >
      {enabled && (
        <SignalField
          active={visible}
          density={
            compact ? { nodes: 36, pulses: 10 } : { nodes: 68, pulses: 22 }
          }
          onReady={() => setReady(true)}
        />
      )}
    </div>
  );
}
