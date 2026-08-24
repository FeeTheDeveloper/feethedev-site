'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
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

function PreviewImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%),linear-gradient(180deg,rgba(11,12,16,0.96),rgba(4,5,8,0.98))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-contain p-3 sm:p-4"
      />
    </div>
  );
}

const options: Option[] = [
  {
    id: 'business',
    label: 'Business Authority System',
    price: 'Starting at $1,500',
    description:
      'A polished authority site for service businesses that need trust, clarity, and a strong conversion path.',
    features: [
      'Custom homepage and service architecture',
      'Mobile-optimized layout system',
      'Lead capture and booking flow',
    ],
    accent: 'red',
    preview: (
      <PreviewImage
        src="/images/design/business-preview.png"
        alt="Business website preview"
      />
    ),
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    price: 'Starting at $5,000',
    description:
      'Premium storefronts designed to sell smoothly, showcase product value, and feel elevated at every step.',
    features: [
      'Storefront design and collection flows',
      'Cart and checkout UX optimization',
      'Product page and upsell strategy',
    ],
    accent: 'green',
    preview: (
      <PreviewImage
        src="/images/design/ecommerce-preview.png"
        alt="E-commerce design preview"
      />
    ),
  },
  {
    id: 'custom-app',
    label: 'Custom App',
    price: 'Discovery required',
    description:
      'Tailored application interfaces for dashboards, portals, internal tools, and specialized operational workflows.',
    features: [
      'Product UX and screen system',
      'Role-based workflows and dashboards',
      'Scalable front-end architecture',
    ],
    accent: 'neutral',
    preview: (
      <PreviewImage
        src="/images/design/custom-app-preview.png"
        alt="Custom application preview"
      />
    ),
  },
  {
    id: 'redesign',
    label: 'Redesign',
    price: 'Starting at $2,500',
    description:
      'A strategic rebuild for outdated sites that need sharper positioning, better UX, and stronger visual credibility.',
    features: [
      'UX audit and conversion cleanup',
      'Visual refresh and component system',
      'Content structure and hierarchy rebuild',
    ],
    accent: 'red',
    preview: (
      <PreviewImage
        src="/images/design/redesign-preview.png"
        alt="Website redesign preview"
      />
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
