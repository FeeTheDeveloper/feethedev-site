'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button, Body, H1, Section } from '@/components/ui';
import { siteConfig } from '@/lib/site-config';

const FuturisticRubiksCube = dynamic(
  () =>
    import('@/components/FuturisticRubiksCube').then(
      (mod) => mod.FuturisticRubiksCube,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="h-[320px] w-full animate-pulse rounded-[2rem] bg-white/5 sm:h-[460px]" />
    ),
  },
);

export function Hero() {
  return (
    <Section className="relative flex min-h-screen items-center overflow-hidden bg-background py-0">
      <div className="pointer-events-none absolute left-[-7rem] top-24 h-64 w-64 rounded-full bg-redglow/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-16 right-[-5rem] h-72 w-72 rounded-full bg-greenglow/15 blur-3xl" />

      <div className="flex min-h-screen flex-col justify-center gap-10 py-16 sm:gap-12 sm:py-20 lg:gap-14 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.04] px-5 py-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:px-8 sm:py-8 lg:px-10 lg:py-9"
        >
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.12),transparent_68%)]" />
          <div className="pointer-events-none absolute left-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_top_left,rgba(255,43,43,0.14),transparent_70%)]" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0 flex-1">
              <div className="text-[clamp(2.1rem,7vw,6.2rem)] font-semibold uppercase leading-[0.86] tracking-[0.24em] text-white sm:tracking-[0.32em]">
                {siteConfig.name}
              </div>
              <div className="mt-4 text-[0.68rem] uppercase tracking-[0.42em] text-slate-400 sm:text-sm sm:tracking-[0.5em]">
                Veteran-Owned Software Company
              </div>
            </div>

            <div className="relative h-20 w-20 shrink-0 sm:h-24 sm:w-24 lg:h-28 lg:w-28">
              <div className="from-white/18 absolute inset-0 rounded-[1.8rem] bg-gradient-to-br via-white/5 to-white/0 blur-xl" />
              <div className="border-white/12 relative h-full w-full overflow-hidden rounded-[1.8rem] border bg-black/40 shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
                <Image
                  src="/brand/ftd-logo.svg"
                  alt={`${siteConfig.name} logo`}
                  fill
                  priority
                  sizes="112px"
                  className="object-contain p-3"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 max-w-2xl space-y-8"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.26em] text-slate-300 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-redglow shadow-[0_0_18px_rgba(255,43,43,0.85)]" />
              Elite Software Systems
            </div>

            <div className="space-y-5">
              <H1 className="max-w-4xl text-balance text-5xl leading-[0.92] sm:text-6xl lg:text-7xl">
                WE BUILD SYSTEMS. NOT WEBSITES.
              </H1>
              <Body className="max-w-xl text-lg text-slate-300 sm:text-xl">
                Futuristic, high-trust digital experiences engineered with
                military precision for brands that want more than a pretty front
                end.
              </Body>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="#contact" glow="gradient">
                Start Your Build
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.85,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="pointer-events-none absolute inset-8 rounded-[2rem] bg-gradient-to-br from-redglow/10 via-transparent to-greenglow/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-5">
              <div className="absolute inset-x-6 top-8 flex items-center justify-between rounded-full border border-white/10 bg-black/30 px-4 py-3 backdrop-blur">
                <div>
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Live Render
                  </div>
                  <div className="text-sm font-medium text-white">
                    React Three Fiber Cube
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-greenglow/20 bg-greenglow/10 px-3 py-2 text-xs uppercase tracking-[0.2em] text-greenglow">
                  <span className="h-2 w-2 rounded-full bg-greenglow shadow-[0_0_16px_rgba(0,255,136,0.9)]" />
                  Active
                </div>
              </div>

              <FuturisticRubiksCube
                style={{
                  minHeight: 'min(88vw, 620px)',
                  borderRadius: '1.5rem',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
