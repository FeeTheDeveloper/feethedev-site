'use client';

import { motion } from 'framer-motion';
import { Body, Button, H2, Section } from '@/components/ui';

export function CtaSection() {
  return (
    <Section
      id="contact"
      className="relative overflow-hidden bg-background pb-24 pt-10 sm:pb-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-6 py-10 shadow-[0_26px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-8 sm:py-12 lg:px-10"
      >
        <div className="pointer-events-none absolute inset-0 rounded-[2.25rem] border border-white/10" />
        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.05, 1] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -left-12 top-10 h-44 w-44 rounded-full bg-redglow/25 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.18, 0.4, 0.18], scale: [1, 1.06, 1] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -right-10 bottom-6 h-52 w-52 rounded-full bg-greenglow/20 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="pointer-events-none absolute -right-8 top-6 h-28 w-28 rounded-full border border-white/10 border-r-redglow/30 border-t-greenglow/40 opacity-50"
        />
        <motion.div
          aria-hidden="true"
          animate={{ rotate: -360 }}
          transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
          className="pointer-events-none absolute bottom-6 left-4 h-20 w-20 rounded-full border border-white/10 border-b-redglow/35 border-l-greenglow/35 opacity-40"
        />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
              Veteran-owned & execution-driven
            </div>
            <div className="space-y-4">
              <H2 className="text-4xl sm:text-5xl lg:text-6xl">
                LET&apos;S ENGINEER YOUR SYSTEMS.
              </H2>
              <Body className="max-w-2xl text-lg sm:text-xl">
                Automation, infrastructure &amp; growth built for leaders who
                demand more.
              </Body>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 uppercase tracking-[0.2em] text-slate-300">
                Trusted by serious operators
              </span>
              <a
                href="/start"
                className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-slate-200 transition hover:text-white"
              >
                contact@feethedeveloper.com
              </a>
            </div>
          </div>

          <div className="flex max-w-xl flex-col gap-3">
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Button href="/start" glow="gradient">
                Start Your Build
              </Button>
            </motion.div>

            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.25,
              }}
            >
              <Button href="#portfolio" glow="green" variant="outline">
                Explore Our Work
              </Button>
            </motion.div>

            <motion.div
              animate={{ y: [0, -1.5, 0] }}
              transition={{
                duration: 3.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.4,
              }}
            >
              <Button
                href="https://vetgang.com/join"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs"
                glow="red"
                variant="outline"
              >
                Join Vet Gang Network
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
