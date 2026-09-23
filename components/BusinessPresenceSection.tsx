'use client';

import { motion } from 'framer-motion';
import { Body, Card, H2, Section } from '@/components/ui';
import { SignalArtwork } from '@/components/SignalArtwork';

const channels = [
  {
    name: 'Google Business Profile',
    detail:
      'Profile setup, optimization, verification support, business categories, service areas, contact data, and launch-readiness.',
  },
  {
    name: 'Apple Business Connect',
    detail:
      'Business presence setup for Apple Maps and Apple ecosystem discovery with consistent company information and brand presentation.',
  },
  {
    name: 'Yelp Business Profile',
    detail:
      'Profile creation or cleanup, business information alignment, service presentation, and reputation-ready setup.',
  },
  {
    name: 'Website + Business Infrastructure',
    detail:
      'A conversion-ready website connected to branded email, analytics, forms, booking, payments, automation, and the systems the business actually uses.',
  },
];

export function BusinessPresenceSection() {
  return (
    <Section id="presence" className="relative bg-black/30">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="space-y-5"
        >
          <div className="inline-flex rounded-full border border-greenglow/25 bg-greenglow/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-greenglow">
            Full Business Presence
          </div>
          <H2 className="text-3xl sm:text-4xl lg:text-5xl">
            We do not stop when the website goes live.
          </H2>
          <Body className="max-w-xl text-slate-300">
            The goal is a business that can be found, trusted, contacted, and
            operated across the platforms customers already use. Fee The
            Developer handles the technology layer end to end, from launch
            through ongoing business infrastructure and operational support.
          </Body>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-slate-300">
            Website + Google + Apple + Yelp + business systems = one coordinated
            launch instead of disconnected vendors.
          </div>
          <SignalArtwork
            src="/google_apple_yelp.PNG"
            alt="Fee The Developer business presence artwork featuring Google, Apple, and Yelp services"
            variant="prism"
            className="mt-8"
          />
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {channels.map((channel, index) => (
            <motion.div
              key={channel.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <Card className="h-full p-6">
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-greenglow">
                  0{index + 1}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {channel.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {channel.detail}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
