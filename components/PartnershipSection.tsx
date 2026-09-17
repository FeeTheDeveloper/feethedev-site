'use client';

import { motion } from 'framer-motion';
import { Body, Button, H2, Section } from '@/components/ui';

export function PartnershipSection() {
  return (
    <Section id="partnership" className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-y-0 right-[-10rem] w-80 rounded-full bg-greenglow/10 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10 lg:p-12"
      >
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
              Direct Strategic Partnership
            </div>
            <H2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl">
              Fee The Developer × Hutchrok Solutions Group
            </H2>
            <Body className="mt-5 max-w-2xl text-slate-300">
              Fee The Developer is the technology and digital execution arm. Hutchrok Solutions Group extends clients into full business solutions, infrastructure, launch support, operational setup, and growth systems. That means a client can start with a website and continue into a complete business presence without rebuilding the relationship from scratch.
            </Body>
          </div>

          <div className="space-y-4 rounded-2xl border border-white/10 bg-black/30 p-6">
            {[
              'Web design, apps, integrations, automation, and digital systems',
              'Google, Apple, and Yelp business presence support',
              'Business infrastructure and operational solutions through Hutchrok',
              'One coordinated handoff between technology and business execution',
            ].map((item) => (
              <div key={item} className="flex gap-3 text-sm leading-6 text-slate-200">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-greenglow shadow-[0_0_12px_rgba(20,232,180,0.8)]" />
                <span>{item}</span>
              </div>
            ))}
            <div className="pt-2">
              <Button href="https://hutchrok.com" glow="gradient">
                Explore Hutchrok Solutions
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
