'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Body, H2, Section } from '@/components/ui';
import { portfolioItems } from '@/lib/portfolio';

const items = portfolioItems.filter((item) => item.featured);

export function ShowcaseRotator() {
  const [index, setIndex] = useState(0);
  const selected = items[index];

  return (
    <Section id="showcase" className="relative overflow-hidden bg-black/30">
      <div className="pointer-events-none absolute inset-y-0 left-[-10rem] w-80 rounded-full bg-electric/10 blur-3xl" />
      <div className="relative">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-greenglow">
            Inside the build
          </p>
          <H2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">
            See how the pieces connect.
          </H2>
          <Body className="mt-5 max-w-2xl text-slate-300">
            Explore verified work across brand experiences, customer-facing
            products, and connected business systems.
          </Body>
        </div>

        <div
          className="mt-10 grid gap-3 sm:grid-cols-3"
          aria-label="Showcase topics"
        >
          {items.map((item, itemIndex) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={index === itemIndex}
              aria-controls="showcase-detail"
              onClick={() => setIndex(itemIndex)}
              className={`group relative isolate min-h-52 overflow-hidden rounded-2xl border p-5 text-left transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-greenglow motion-reduce:transition-none sm:min-h-64 ${
                index === itemIndex
                  ? 'border-greenglow/70 shadow-[0_16px_55px_rgba(20,232,180,0.12)]'
                  : 'border-white/15 hover:-translate-y-1 hover:border-white/40 motion-reduce:hover:translate-y-0'
              }`}
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="-z-20 object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <span className="absolute inset-0 -z-10 bg-gradient-to-t from-[#05070b] via-[#05070b]/50 to-[#05070b]/10" />
              <span className="flex h-full flex-col justify-between gap-8">
                <span className="w-fit rounded-full border border-white/25 bg-black/45 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                  {item.category}
                </span>
                <span className="flex items-end justify-between gap-4">
                  <span className="text-xl font-semibold leading-tight text-white sm:text-2xl">
                    {item.name}
                  </span>
                  <span
                    className="shrink-0 text-2xl text-greenglow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </span>
              </span>
            </button>
          ))}
        </div>

        <div
          id="showcase-detail"
          className="mt-4 grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b1018] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
        >
          <div className="relative min-h-64 overflow-hidden bg-black/30 sm:min-h-80">
            <Image
              key={selected.id}
              src={selected.image}
              alt={selected.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className={
                selected.imageFit === 'contain'
                  ? 'object-contain p-8 sm:p-10'
                  : 'object-cover'
              }
              style={
                selected.imagePosition
                  ? { objectPosition: selected.imagePosition }
                  : undefined
              }
            />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenglow">
              {selected.status} · {selected.stage}
            </p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
              {selected.name}
            </h3>
            <p className="mt-4 max-w-prose text-base leading-7 text-slate-300">
              {selected.summary}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-greenglow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenglow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1018]"
              >
                See all selected work
              </Link>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                {String(index + 1).padStart(2, '0')} /{' '}
                {String(items.length).padStart(2, '0')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
