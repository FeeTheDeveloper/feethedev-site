'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Tilt3DProps = {
  children: ReactNode;
  className?: string;
  /** Maximum rotation in degrees at the card edge. */
  max?: number;
  /** Adds a soft light that follows the pointer across the surface. */
  glare?: boolean;
};

const QUERY =
  '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)';

/**
 * Pointer-driven perspective tilt for media and cards.
 *
 * Only activates for fine-pointer devices without a reduced-motion
 * preference; touch and keyboard users get the untouched layout. Wrap the
 * element rather than adding transforms to it so existing GSAP or Tailwind
 * transforms on the child keep working.
 */
export function Tilt3D({
  children,
  className,
  max = 5,
  glare = true,
}: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const media = window.matchMedia(QUERY);
    if (!node) return;

    let frame = 0;
    let pending: { x: number; y: number } | null = null;

    const flush = () => {
      frame = 0;
      if (!pending) return;
      const { x, y } = pending;
      node.style.setProperty(
        '--tilt-ry',
        `${((x - 0.5) * 2 * max).toFixed(2)}deg`,
      );
      node.style.setProperty(
        '--tilt-rx',
        `${((0.5 - y) * 2 * max).toFixed(2)}deg`,
      );
      node.style.setProperty('--glare-x', `${(x * 100).toFixed(1)}%`);
      node.style.setProperty('--glare-y', `${(y * 100).toFixed(1)}%`);
    };

    const onMove = (event: PointerEvent) => {
      if (!media.matches || event.pointerType !== 'mouse') return;
      const rect = node.getBoundingClientRect();
      pending = {
        x: Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1),
        y: Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1),
      };
      node.dataset.tilting = '';
      if (!frame) frame = requestAnimationFrame(flush);
    };

    const onLeave = () => {
      pending = null;
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      delete node.dataset.tilting;
      node.style.setProperty('--tilt-rx', '0deg');
      node.style.setProperty('--tilt-ry', '0deg');
    };

    node.addEventListener('pointermove', onMove);
    node.addEventListener('pointerleave', onLeave);
    media.addEventListener('change', onLeave);

    return () => {
      node.removeEventListener('pointermove', onMove);
      node.removeEventListener('pointerleave', onLeave);
      media.removeEventListener('change', onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [max]);

  return (
    <div ref={ref} className={cn('tilt-3d', className)}>
      <div className="tilt-3d__inner">
        {children}
        {glare && <span className="tilt-3d__glare" aria-hidden="true" />}
      </div>
    </div>
  );
}
