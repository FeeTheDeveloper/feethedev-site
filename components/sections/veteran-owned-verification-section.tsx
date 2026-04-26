'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Body, H2, Section } from '@/components/ui';

export function VeteranOwnedVerificationSection() {
  return (
    <Section className="relative overflow-hidden bg-background pt-0">
      <div className="pointer-events-none absolute left-[-6rem] top-10 h-48 w-48 rounded-full bg-redglow/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[-4rem] h-56 w-56 rounded-full bg-greenglow/15 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.04] px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:px-8 sm:py-12 lg:px-10"
      >
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.12),transparent_68%)]" />
        <div className="pointer-events-none absolute left-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_top_left,rgba(255,43,43,0.14),transparent_70%)]" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-redglow shadow-[0_0_18px_rgba(255,43,43,0.85)]" />
              Texas Veterans Commission Verified
            </div>

            <div className="space-y-4">
              <H2 className="text-3xl sm:text-4xl lg:text-5xl">
                Verified Veteran-Owned Software Company
              </H2>
              <Body className="max-w-2xl">
                Fee The Developer LLC is proudly verified by the Texas Veterans
                Commission as a Veteran-Owned Business. We build software
                systems with discipline, precision, and execution-first
                standards.
              </Body>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">
                Veteran-Owned
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">
                Texas Verified
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">
                Software Systems
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative rounded-[2rem] border border-white/10 bg-black/30 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6">
              <Image
                src="/images/vep-vob-logo.png"
                alt="Veteran-Owned Business badge verified by the Texas Veterans Commission"
                width={340}
                height={386}
                sizes="(min-width: 1024px) 340px, (min-width: 640px) 300px, 250px"
                className="h-auto w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[340px]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
