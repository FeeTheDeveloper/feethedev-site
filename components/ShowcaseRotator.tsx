'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Body, H2, Section } from '@/components/ui';

type ShowcaseItem = {
  id: string;
  type: 'customer' | 'product' | 'event';
  title: string;
  detail: string;
  meta?: string;
  image?: string;
};

const showcaseItems: ShowcaseItem[] = [
  {
    id: 'customer-success',
    type: 'customer',
    title: 'From disconnected tools to connected growth',
    detail:
      'A customer success vision for bringing websites, scheduling, messaging, automation, and reporting into one clearer operating system.',
    meta: 'Connected operations · Customer success',
    image: '/ftd-showcase-customer-success.png',
  },
  {
    id: 'product-1',
    type: 'product',
    title: 'Web + software systems',
    detail:
      'Design, code, integrations, deployment, and scale brought together as one connected build.',
    meta: 'Design · Apps · Systems',
    image: '/web_software.PNG',
  },
  {
    id: 'software-launch-workshop',
    type: 'event',
    title: 'Build, launch, and scale workshop',
    detail:
      'A hands-on event experience focused on turning ideas into connected software, dependable launches, and systems ready to grow.',
    meta: 'Workshop · Software launch',
    image: '/ftd-showcase-event-workshop.png',
  },
];

const typeLabel: Record<ShowcaseItem['type'], string> = {
  customer: 'Customer Success',
  product: 'Product Spotlight',
  event: 'Event',
};

function pickNextIndex(current: number, length: number) {
  if (length <= 1) return current;
  let next = current;
  while (next === current) {
    next = Math.floor(Math.random() * length);
  }
  return next;
}

export function ShowcaseRotator() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || showcaseItems.length <= 1) return;
    const delay = 4500 + Math.random() * 2500;
    const timer = setTimeout(() => {
      setIndex((current) => pickNextIndex(current, showcaseItems.length));
    }, delay);
    return () => clearTimeout(timer);
  }, [index, reduceMotion]);

  const item = showcaseItems[index];

  return (
    <Section id="showcase" className="relative overflow-hidden bg-black/30">
      <div className="pointer-events-none absolute inset-y-0 left-[-10rem] w-80 rounded-full bg-electric/10 blur-3xl" />
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
          Live Showcase
        </div>
        <H2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl">
          Customer outcomes, products, and events in rotation
        </H2>
        <Body className="mx-auto mt-5 max-w-2xl text-slate-300">
          Explore customer outcomes, connected products, and hands-on events
          built around practical digital growth.
        </Body>

        <div
          className="relative mt-8 min-h-[320px] sm:min-h-[240px]"
          aria-live="polite"
          aria-atomic="true"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-xl sm:grid-cols-[0.85fr_1.15fr] sm:p-8"
            >
              <div
                className={`relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.06] to-black/40 sm:aspect-auto ${
                  item.image
                    ? 'showcase-artifact border border-electric/25'
                    : 'border border-dashed border-white/15'
                }`}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 p-6 text-center">
                    <span className="text-[0.6rem] uppercase tracking-[0.3em] text-slate-500">
                      Image Placeholder
                    </span>
                    <span className="text-sm text-slate-400">
                      {typeLabel[item.type]}
                    </span>
                  </div>
                )}
                {item.image && <div className="showcase-artifact__flare" aria-hidden />}
              </div>
              <div className="flex flex-col justify-center gap-3">
                <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.6rem] uppercase tracking-[0.24em] text-greenglow">
                  {typeLabel[item.type]}
                </span>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-slate-300 sm:text-base">
                  {item.detail}
                </p>
                {item.meta && (
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {item.meta}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {showcaseItems.map((entry, i) => (
            <button
              key={entry.id}
              type="button"
              aria-label={`Show ${entry.title}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-6 bg-greenglow' : 'w-1.5 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
