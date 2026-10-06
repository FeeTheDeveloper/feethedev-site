'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { MerchModelShot } from '@/lib/merch';

type Props = {
  shots: readonly MerchModelShot[];
};

/** How long each colorway holds before the hero advances on its own. */
const HOLD_MS = 2600;

export function MerchModelHero({ shots }: Props) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  // Tracks which way the viewer moved so the swap slides the matching way.
  const directionRef = useRef(1);

  const shot = shots[index];
  const autoplay = playing && !prefersReducedMotion;

  useEffect(() => {
    if (!autoplay) return;

    const timer = window.setInterval(() => {
      directionRef.current = 1;
      setIndex((current) => (current + 1) % shots.length);
    }, HOLD_MS);

    return () => window.clearInterval(timer);
  }, [autoplay, shots.length]);

  const select = useCallback(
    (next: number) => {
      directionRef.current = next >= index ? 1 : -1;
      setIndex(next);
      // A deliberate pick wins over the reel until the viewer resumes it.
      setPlaying(false);
    },
    [index],
  );

  const direction = directionRef.current;

  return (
    <div className="relative">
      {/* Colorway-matched bloom behind the frame, so the whole module shifts
          hue with the garment rather than just the photo. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] blur-3xl"
        animate={{ backgroundColor: shot.swatch, opacity: 0.22 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B1018]">
        <div className="relative aspect-[4/5] w-full">
          <AnimatePresence initial={false} mode="popLayout" custom={direction}>
            <motion.div
              key={shot.colorSlug}
              custom={direction}
              initial={
                prefersReducedMotion
                  ? false
                  : { clipPath: 'inset(0 0 100% 0)', scale: 1.06 }
              }
              animate={{ clipPath: 'inset(0 0 0% 0)', scale: 1 }}
              exit={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { clipPath: 'inset(100% 0 0 0)', scale: 1.04 }
              }
              transition={{
                clipPath: {
                  duration: prefersReducedMotion ? 0 : 0.52,
                  ease: [0.22, 1, 0.36, 1],
                },
                scale: {
                  duration: prefersReducedMotion ? 0 : 0.9,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              className="absolute inset-0"
            >
              <Image
                src={shot.image}
                alt={shot.imageAlt}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Keeps the chips legible over the lighter colorways. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/70 to-transparent"
          />

          <div className="absolute bottom-4 left-4 flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="h-7 w-7 rounded-full border border-white/40 shadow-inner"
              style={{ backgroundColor: shot.swatch }}
            />
            <div className="overflow-hidden">
              <AnimatePresence initial={false} mode="wait">
                <motion.span
                  key={shot.colorSlug}
                  initial={prefersReducedMotion ? false : { y: '110%' }}
                  animate={{ y: '0%' }}
                  exit={prefersReducedMotion ? { y: '0%' } : { y: '-110%' }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.34,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block text-sm font-bold uppercase tracking-[0.18em] text-white"
                >
                  {shot.color}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <fieldset className="flex flex-wrap gap-2">
          <legend className="sr-only">Preview hoodie colorway</legend>
          {shots.map((option, optionIndex) => {
            const isActive = option.colorSlug === shot.colorSlug;

            return (
              <button
                key={option.colorSlug}
                type="button"
                aria-label={`Preview the ${option.color} hoodie`}
                aria-pressed={isActive}
                onClick={() => select(optionIndex)}
                className={`grid h-10 w-10 place-items-center rounded-full border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  isActive
                    ? 'scale-105 border-white bg-white/15'
                    : 'border-white/20 bg-white/[0.04] hover:border-white/60 hover:bg-white/10'
                }`}
              >
                <span
                  aria-hidden="true"
                  className="h-6 w-6 rounded-full border border-slate-950/20 shadow-inner"
                  style={{ backgroundColor: option.swatch }}
                />
              </button>
            );
          })}
        </fieldset>

        {!prefersReducedMotion && (
          <button
            type="button"
            onClick={() => setPlaying((current) => !current)}
            aria-pressed={playing}
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
          >
            {playing ? 'Pause colors' : 'Play colors'}
          </button>
        )}
      </div>

      <p className="sr-only" aria-live="polite">
        {`Showing the ${shot.color} hoodie.`}
      </p>
    </div>
  );
}
