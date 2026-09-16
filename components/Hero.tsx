'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button, Body, H1, Section } from '@/components/ui';
import { siteConfig } from '@/lib/site-config';

export function Hero() {
  return (
    <Section className="relative flex min-h-screen items-center overflow-hidden bg-background py-0">
      <div className="pointer-events-none absolute left-[-7rem] top-24 h-64 w-64 rounded-full bg-redglow/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-16 right-[-5rem] h-72 w-72 rounded-full bg-greenglow/15 blur-3xl" />

      <div className="grid min-h-screen items-center gap-12 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 space-y-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-greenglow shadow-[0_0_18px_rgba(0,255,136,0.85)]" />
            Veteran-Owned • Web • Automation • Business Presence
          </div>

          <div className="space-y-5">
            <div className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-400">
              {siteConfig.name}
            </div>
            <H1 className="max-w-4xl text-balance text-5xl leading-[0.92] sm:text-6xl lg:text-7xl">
              WE BUILD THE WEBSITE. THEN WE BUILD THE BUSINESS PRESENCE AROUND IT.
            </H1>
            <Body className="max-w-2xl text-lg text-slate-300 sm:text-xl">
              Custom websites, apps, automation, Google Business Profile verification support, Apple Business Connect, Yelp setup, and connected business systems — delivered as one coordinated digital launch.
            </Body>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button href="/start" glow="gradient">
              Build My Business Presence
            </Button>
            <Button href="#packages">View Bundles</Button>
          </div>

          <div className="grid gap-3 pt-2 sm:grid-cols-3">
            {[
              'Website + Development',
              'Google • Apple • Yelp',
              'Hutchrok Business Solutions',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-medium text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="pointer-events-none absolute inset-8 rounded-[2rem] bg-gradient-to-br from-redglow/10 via-transparent to-greenglow/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-5">
            <div className="relative aspect-square overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40">
              <Image
                src="/brand/ftd-logo.svg"
                alt={`${siteConfig.name} brand artwork`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-8"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur-md">
                <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Direct Partnership</div>
                <div className="mt-1 text-lg font-semibold text-white">Fee The Developer × Hutchrok Solutions Group</div>
                <div className="mt-2 text-sm leading-6 text-slate-300">Technology execution backed by full business solutions.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
