import type { Metadata } from 'next';
import { PageIntro } from '@/components/PageIntro';
import { Button, Card, Section } from '@/components/ui';
import { addOnPricing, pricingOptions } from '@/lib/catalog';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Review Fee The Developer service packages, add-ons, and current starting prices.',
  alternates: { canonical: '/pricing' },
};

export default function PricingPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <PageIntro
        eyebrow="Pricing / Clear starting points"
        title={
          <>
            Know the range before we{' '}
            <span className="ftd-gradient-text">scope the build.</span>
          </>
        }
        description="These prices reflect the current Fee The Developer service catalog. A written scope confirms the final deliverables, schedule, and price before work begins."
        aside={
          <div className="rounded-3xl border border-greenglow/25 bg-greenglow/[0.07] p-6">
            <p className="text-sm font-semibold text-white">
              How payment works
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Start with a consultation. After scope is agreed, use the secure
              Stripe payment link provided for your project.
            </p>
          </div>
        }
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {pricingOptions.map((option, index) => (
            <Card
              key={option.name}
              hover={false}
              accent={index === 1 ? 'green' : index === 3 ? 'red' : 'neutral'}
              className="h-full p-7 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Core service
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">
                    {option.name}
                  </h2>
                </div>
                <p className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-lg font-semibold tabular-nums text-greenglow">
                  {option.price}
                </p>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                {option.description}
              </p>
              <ul className="mt-6 space-y-3">
                {option.includes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-slate-200"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-electric"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-black/25">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="status-chip">Focused add-ons</p>
            <h2 className="mt-5 text-3xl font-semibold text-white">
              Add only what moves the system forward.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Each add-on covers one defined implementation scope. Larger or
              multi-system work is quoted after discovery.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
            <ul className="divide-y divide-white/10">
              {addOnPricing.map(([name, price]) => (
                <li
                  key={name}
                  className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <span className="text-sm font-medium text-slate-200">
                    {name}
                  </span>
                  <span className="shrink-0 text-sm font-semibold tabular-nums text-greenglow">
                    {price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-7 text-slate-400">
            Prices are in USD and represent the current catalog. Third-party
            fees, taxes, domains, hosting, paid software, content production,
            and work outside the agreed scope may be separate. Platform
            approvals are controlled by each platform and are not guaranteed.
          </p>
          <div className="mt-7 flex justify-center">
            <Button href="/start">Plan my project</Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
