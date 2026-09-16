'use client';

import { motion } from 'framer-motion';
import { Card, Body, H2, Section } from '@/components/ui';

type Service = {
  title: string;
  description: string;
  accent: 'red' | 'green' | 'neutral';
};

const services: Service[] = [
  {
    title: 'Website Design & Development',
    description:
      'Custom, mobile-first business websites engineered for trust, conversion, speed, and clean expansion into future services.',
    accent: 'red',
  },
  {
    title: 'Google Business Presence',
    description:
      'Google Business Profile setup, optimization, verification support, category planning, service-area alignment, and profile readiness.',
    accent: 'green',
  },
  {
    title: 'Apple + Yelp Presence',
    description:
      'Apple Business Connect and Yelp profile setup or cleanup so your company information stays consistent wherever customers search.',
    accent: 'neutral',
  },
  {
    title: 'Automation & Integrations',
    description:
      'Forms, CRM, booking, payments, APIs, AI workflows, email systems, dashboards, and back-office connections that reduce manual work.',
    accent: 'green',
  },
  {
    title: 'Web Applications',
    description:
      'Custom portals, internal tools, dashboards, client experiences, and operational applications built around your actual business logic.',
    accent: 'red',
  },
  {
    title: 'E-Commerce Systems',
    description:
      'Storefronts, product systems, payments, customer flows, fulfillment integrations, and conversion-focused commerce experiences.',
    accent: 'neutral',
  },
  {
    title: 'Business Infrastructure',
    description:
      'Through our direct Hutchrok partnership, qualified engagements can extend beyond development into broader business setup and operating solutions.',
    accent: 'green',
  },
  {
    title: 'Custom Software',
    description:
      'When off-the-shelf tools stop fitting, we design and build the software, automations, and integrations required to make the business operate cleanly.',
    accent: 'red',
  },
];

export function ServicesSection() {
  return (
    <Section id="services" className="relative bg-background">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl space-y-5"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
            What We Build
          </div>
          <H2 className="text-3xl sm:text-4xl lg:text-5xl">
            More than a website. A complete digital operating presence.
          </H2>
          <Body className="max-w-2xl">
            We combine development, verification support, platform presence, automation, and business infrastructure so clients do not have to stitch together five different vendors to get launched correctly.
          </Body>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
            >
              <Card accent={service.accent} className="h-full p-6">
                <div className="flex h-full flex-col">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-sm font-semibold ${
                      service.accent === 'red'
                        ? 'border-redglow/25 bg-redglow/10 text-redglow'
                        : service.accent === 'green'
                          ? 'border-greenglow/25 bg-greenglow/10 text-greenglow'
                          : 'border-white/10 bg-white/5 text-white'
                    }`}
                  >
                    0{index + 1}
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">
                    {service.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
