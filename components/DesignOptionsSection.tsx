'use client';

import type { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Body, Card, H2, Section } from '@/components/ui';
import { cn } from '@/lib/utils';

type Option = {
  id: 'business' | 'ecommerce' | 'custom-app' | 'redesign';
  label: string;
  price: string;
  description: string;
  features: string[];
  accent: 'red' | 'green' | 'neutral';
  preview: ReactNode;
};

const options: Option[] = [
  {
    id: 'business',
    label: 'Business Website',
    price: '$3,500 - $8,000',
    description:
      'A polished authority site for service businesses that need trust, clarity, and a strong conversion path.',
    features: [
      'Custom homepage and service architecture',
      'Mobile-optimized layout system',
      'Lead capture and booking flow',
    ],
    accent: 'red',
    preview: (
      <div className="grid gap-3">
        <div className="h-28 rounded-2xl border border-white/10 bg-gradient-to-br from-redglow/15 via-white/5 to-transparent" />
        <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
          <div className="h-20 rounded-2xl border border-white/10 bg-white/5" />
          <div className="h-20 rounded-2xl border border-redglow/20 bg-redglow/5" />
        </div>
      </div>
    ),
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    price: '$6,000 - $15,000',
    description:
      'Premium storefronts designed to sell smoothly, showcase product value, and feel elevated at every step.',
    features: [
      'Storefront design and collection flows',
      'Cart and checkout UX optimization',
      'Product page and upsell strategy',
    ],
    accent: 'green',
    preview: (
      <div className="grid gap-3">
        <div className="grid grid-cols-3 gap-3">
          <div className="h-20 rounded-2xl border border-white/10 bg-white/5" />
          <div className="h-20 rounded-2xl border border-greenglow/20 bg-greenglow/5" />
          <div className="h-20 rounded-2xl border border-white/10 bg-white/5" />
        </div>
        <div className="h-24 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 via-greenglow/10 to-white/5" />
      </div>
    ),
  },
  {
    id: 'custom-app',
    label: 'Custom App',
    price: '$12,000 - $35,000+',
    description:
      'Tailored application interfaces for dashboards, portals, internal tools, and specialized operational workflows.',
    features: [
      'Product UX and screen system',
      'Role-based workflows and dashboards',
      'Scalable front-end architecture',
    ],
    accent: 'neutral',
    preview: (
      <div className="grid gap-3">
        <div className="grid gap-3 sm:grid-cols-[0.4fr_1fr]">
          <div className="h-28 rounded-2xl border border-white/10 bg-white/5" />
          <div className="grid gap-3">
            <div className="h-12 rounded-2xl border border-white/10 bg-white/5" />
            <div className="h-12 rounded-2xl border border-white/10 bg-white/5" />
            <div className="h-12 rounded-2xl border border-white/10 bg-white/5" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'redesign',
    label: 'Redesign',
    price: '$4,500 - $12,000',
    description:
      'A strategic rebuild for outdated sites that need sharper positioning, better UX, and stronger visual credibility.',
    features: [
      'UX audit and conversion cleanup',
      'Visual refresh and component system',
      'Content structure and hierarchy rebuild',
    ],
    accent: 'red',
    preview: (
      <div className="grid gap-3">
        <div className="h-20 rounded-2xl border border-white/10 bg-white/5" />
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="h-28 rounded-2xl border border-redglow/20 bg-redglow/5" />
          <div className="h-28 rounded-2xl border border-white/10 bg-white/5" />
        </div>
      </div>
    ),
  },
];

export function DesignOptionsSection() {
  const [activeId, setActiveId] = useState<Option['id']>(options[0].id);
  const activeOption =
    options.find((option) => option.id === activeId) ?? options[0];

  return (
    <Section id="design-options" className="relative bg-background pt-8">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl space-y-5"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
            Design Options
          </div>
          <H2 className="text-3xl sm:text-4xl lg:text-5xl">
            Choose the build path that matches how your business actually sells.
          </H2>
          <Body className="max-w-2xl">
            Select an option to compare pricing range, included features, and a
            simple preview of the experience direction.
          </Body>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {options.map((option) => {
            const active = option.id === activeId;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setActiveId(option.id)}
                className={cn(
                  'relative overflow-hidden rounded-full border px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition duration-300',
                  active
                    ? 'border-white/20 text-white'
                    : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white',
                )}
              >
                {active && (
                  <motion.span
                    layoutId="design-option-pill"
                    className={cn(
                      'absolute inset-0 rounded-full border',
                      option.accent === 'green'
                        ? 'border-greenglow/25 bg-greenglow/10'
                        : option.accent === 'red'
                          ? 'border-redglow/25 bg-redglow/10'
                          : 'border-white/15 bg-white/10',
                    )}
                    transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                  />
                )}
                <span className="relative z-10">{option.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeOption.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3 }}
              className="contents"
            >
              <Card
                accent={activeOption.accent}
                className="p-6 sm:p-7"
                hover={false}
              >
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                      Pricing Range
                    </div>
                    <div className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                      {activeOption.price}
                    </div>
                    <p className="max-w-xl text-base leading-7 text-slate-300">
                      {activeOption.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                      Included Features
                    </div>
                    <div className="grid gap-3">
                      {activeOption.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                        >
                          <span
                            className={cn(
                              'mt-1 h-2.5 w-2.5 rounded-full',
                              activeOption.accent === 'green'
                                ? 'bg-greenglow shadow-[0_0_14px_rgba(0,255,136,0.8)]'
                                : activeOption.accent === 'red'
                                  ? 'bg-redglow shadow-[0_0_14px_rgba(255,43,43,0.8)]'
                                  : 'bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]',
                            )}
                          />
                          <span className="text-base leading-7 text-slate-200">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              <Card
                accent={activeOption.accent}
                className="p-6 sm:p-7"
                hover={false}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                        Preview Layout
                      </div>
                      <div className="mt-2 text-xl font-semibold text-white">
                        {activeOption.label}
                      </div>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.22em] text-slate-300">
                      Interactive
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/10 bg-black/30 p-4">
                    <div className="mb-4 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-redglow/85" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
                      <span className="h-2.5 w-2.5 rounded-full bg-greenglow/85" />
                    </div>
                    {activeOption.preview}
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
