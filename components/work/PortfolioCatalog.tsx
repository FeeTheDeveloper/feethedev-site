'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import {
  portfolioItems,
  portfolioStages,
  type PortfolioStage,
} from '@/lib/portfolio';

type ActiveStage = 'All' | PortfolioStage;

export function PortfolioCatalog() {
  const [activeStage, setActiveStage] = useState<ActiveStage>('All');
  const visibleItems = useMemo(
    () =>
      activeStage === 'All'
        ? portfolioItems
        : portfolioItems.filter((item) => item.stage === activeStage),
    [activeStage],
  );

  return (
    <div>
      <div className="signal-rail rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-4 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
              Signal rail
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              Filter the catalog by the part of the business system each project
              makes visible.
            </p>
          </div>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter work by delivery stage"
          >
            {portfolioStages.map((stage) => {
              const selected = activeStage === stage;
              return (
                <button
                  key={stage}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActiveStage(stage)}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenglow/60 active:translate-y-px motion-reduce:transition-none ${
                    selected
                      ? 'border-greenglow/60 bg-greenglow/15 text-white'
                      : 'border-white/15 bg-black/20 text-slate-300 hover:border-white/35 hover:text-white'
                  }`}
                >
                  {stage}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visibleItems.length} project
        {visibleItems.length === 1 ? '' : 's'}.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleItems.map((item) => (
          <article
            key={item.id}
            className={`group flex min-h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b1018] shadow-[0_24px_70px_rgba(0,0,0,0.22)] transition duration-300 focus-within:border-greenglow/45 hover:-translate-y-1 hover:border-white/25 motion-reduce:transform-none motion-reduce:transition-none ${
              item.featured && activeStage === 'All'
                ? 'xl:first:col-span-2'
                : ''
            }`}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#060912]">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className={`transition duration-500 group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none ${
                  item.imageFit === 'contain'
                    ? 'object-contain p-6 sm:p-8'
                    : 'object-cover'
                }`}
                style={
                  item.imagePosition
                    ? { objectPosition: item.imagePosition }
                    : undefined
                }
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#05070b]/80 via-transparent to-transparent"
              />
              <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/20 bg-black/65 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                  {item.status}
                </span>
                <span className="rounded-full border border-greenglow/25 bg-greenglow/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-greenglow backdrop-blur">
                  {item.stage}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan">
                {item.category}
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-white">
                {item.name}
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                {item.summary}
              </p>

              <div className="mt-5 border-l border-electric/40 pl-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Fee The Developer role
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  {item.role}
                </p>
              </div>

              <ul
                className="mt-5 flex flex-wrap gap-2"
                aria-label="Capabilities"
              >
                {item.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs text-slate-300"
                  >
                    {capability}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs leading-5 text-slate-500">
                {item.boundary}
              </p>

              <div className="mt-auto flex flex-wrap gap-4 pt-7 text-sm font-semibold">
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-4 py-2 text-black transition hover:bg-greenglow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenglow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1018] active:translate-y-px motion-reduce:transition-none"
                  >
                    {item.status === 'Review build'
                      ? 'Open review build ↗'
                      : 'Visit project ↗'}
                  </a>
                )}
                <a
                  href={item.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-4 py-2 text-white transition hover:border-white/40 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenglow/60 active:translate-y-px motion-reduce:transition-none"
                >
                  View repository ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
