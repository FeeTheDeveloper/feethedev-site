'use client';

import { motion } from 'framer-motion';
import { Card, Body, H2, Section } from '@/components/ui';

type Service = {
  title: string;
  description: string;
  accent: 'red' | 'green' | 'neutral';
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: 'Website Design',
    description:
      'High-trust marketing sites with premium visual systems, clear messaging, and strong conversion structure.',
    accent: 'red',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M4 6.75h16M9 17.25h6M6.75 4h10.5A2.75 2.75 0 0 1 20 6.75v10.5A2.75 2.75 0 0 1 17.25 20H6.75A2.75 2.75 0 0 1 4 17.25V6.75A2.75 2.75 0 0 1 6.75 4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Web Applications',
    description:
      'Custom application interfaces built for operators, internal tools, dashboards, and modern product workflows.',
    accent: 'green',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M7.5 4v16M16.5 4v16M4 8.5h16M4 15.5h16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: 'E-Commerce',
    description:
      'Performance-minded storefronts designed to sell cleanly, scale smoothly, and feel elevated at every touchpoint.',
    accent: 'neutral',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M5 6.25h14l-1.1 6.05a2 2 0 0 1-1.97 1.7H8.07a2 2 0 0 1-1.97-1.7L5 6.25Zm0 0-.5-2.25H3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="18.25" r="1.25" fill="currentColor" />
        <circle cx="16" cy="18.25" r="1.25" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'API & Integrations',
    description:
      'Reliable connections between platforms, automations, and back-office systems so the business runs like one unit.',
    accent: 'green',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M8.25 8.25 4 12l4.25 3.75M15.75 8.25 20 12l-4.25 3.75M13.5 5l-3 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
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
            Core Services
          </div>
          <H2 className="text-3xl sm:text-4xl lg:text-5xl">
            Systems-first services built for modern brands that need more than
            surface-level design.
          </H2>
          <Body className="max-w-2xl">
            From marketing sites to application workflows, each engagement is
            designed to look premium, perform smoothly, and scale cleanly.
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
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
            >
              <Card accent={service.accent} className="h-full p-6">
                <div className="flex h-full flex-col">
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border ${
                      service.accent === 'red'
                        ? 'border-redglow/25 bg-redglow/10 text-redglow'
                        : service.accent === 'green'
                          ? 'border-greenglow/25 bg-greenglow/10 text-greenglow'
                          : 'border-white/10 bg-white/5 text-white'
                    }`}
                  >
                    {service.icon}
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
