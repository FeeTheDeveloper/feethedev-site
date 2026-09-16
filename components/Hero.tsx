'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button, Body, H1, Section } from '@/components/ui';
import { siteConfig } from '@/lib/site-config';

const orbitItems = [
  { label: 'AI', className: 'left-[2%] top-[18%]', delay: 0 },
  { label: 'WEB', className: 'right-[4%] top-[12%]', delay: 0.2 },
  { label: 'API', className: 'right-[1%] bottom-[20%]', delay: 0.4 },
  { label: 'CLOUD', className: 'left-[4%] bottom-[15%]', delay: 0.6 },
];

export function Hero() {
  return (
    <Section className="relative flex min-h-screen items-center overflow-hidden bg-transparent py-0">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10rem] top-16 h-80 w-80 rounded-full bg-electric/20 blur-[110px]" />
        <div className="absolute right-[-8rem] top-20 h-72 w-72 rounded-full bg-greenglow/15 blur-[100px]" />
        <div className="absolute bottom-[-7rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-redglow/10 blur-[110px]" />
      </div>

      <div className="grid min-h-screen items-center gap-12 py-20 lg:grid-cols-[0.94fr_1.06fr] lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 space-y-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-electric/30 bg-electric/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-200 shadow-electric backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-greenglow shadow-[0_0_18px_rgba(32,255,116,0.95)]" />
            Veteran-Owned • Web • AI • Business Presence
          </div>

          <div className="space-y-5">
            <div className="text-sm font-semibold uppercase tracking-[0.36em] text-cyan">
              {siteConfig.name}
            </div>
            <H1 className="max-w-5xl text-balance text-5xl leading-[0.9] sm:text-6xl lg:text-7xl xl:text-8xl">
              BUILD. <span className="ftd-gradient-text">AUTOMATE.</span> CREATE. SCALE.
            </H1>
            <Body className="max-w-2xl text-lg text-slate-300 sm:text-xl">
              We design the site, wire the systems, strengthen the digital presence,
              and connect the business to the tools that make it move.
            </Body>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button href="/start" glow="gradient">
              Build My Business
            </Button>
            <Button href="#packages">Explore Bundles</Button>
          </div>

          <div className="grid gap-3 pt-2 sm:grid-cols-3">
            {[
              ['Web + Software', 'Design, apps, systems'],
              ['Google + Apple + Yelp', 'Presence + verification support'],
              ['Hutchrok Partnership', 'Full business solutions'],
            ].map(([title, desc], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.08 }}
                whileHover={{ y: -4, scale: 1.015 }}
                className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-4 backdrop-blur-xl"
              >
                <div className="text-sm font-semibold text-white">{title}</div>
                <div className="mt-1 text-xs leading-5 text-slate-400">{desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: 1.5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[720px]"
        >
          <div className="pointer-events-none absolute inset-0 scale-90 rounded-full border border-electric/25 shadow-electric" />
          <div className="pointer-events-none absolute inset-[8%] rounded-full border border-greenglow/15" />
          <div className="pointer-events-none absolute inset-[17%] rounded-full border border-redglow/10" />

          {orbitItems.map((item) => (
            <motion.div
              key={item.label}
              className={`absolute z-20 ${item.className}`}
              animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 4.5, delay: item.delay, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="rounded-2xl border border-white/10 bg-[#080d15]/90 px-4 py-3 text-xs font-bold tracking-[0.22em] text-white shadow-[0_14px_40px_rgba(0,0,0,.45)] backdrop-blur-xl">
                {item.label}
              </div>
            </motion.div>
          ))}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="neon-border relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_28px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-4"
          >
            <div className="relative aspect-square overflow-hidden rounded-[1.6rem] bg-[#05070b]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(37,120,255,.2),transparent_35%)]" />
              <Image
                src="/brand/ftd-logo.svg"
                alt={`${siteConfig.name} brand artwork`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-7 sm:p-10"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-5">
                <div className="flex flex-wrap items-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-cyan">
                  <span>Direct Partnership</span>
                  <span className="h-1 w-1 rounded-full bg-greenglow" />
                  <span>Full Business Systems</span>
                </div>
                <div className="mt-2 text-lg font-semibold text-white sm:text-xl">
                  Fee The Developer × Hutchrok Solutions Group
                </div>
                <div className="mt-2 text-sm leading-6 text-slate-300">
                  Technology execution backed by complete business infrastructure.
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
