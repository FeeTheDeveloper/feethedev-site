import Link from 'next/link';
import { Body, Button, H2, Section } from '@/components/ui';

const capabilities = [
  'Authorized web data extraction',
  'Scheduled monitoring & change alerts',
  'Normalization & structured pipelines',
  'Public API aggregation',
  'Market & competitive intelligence',
  'Supabase-backed storage',
  'Analytics & reporting dashboards',
  'Opportunity & signal feeds',
];

const productIdeas = [
  'Public bid & government opportunity monitor',
  'Competitor pricing monitor',
  'Real estate public-data tracker',
  'Logistics lane intelligence',
  'Business directory intelligence',
  'Public review sentiment monitor',
  'Inventory & availability monitor',
  'Public licensing / filing monitor',
];

export function DataIntelligenceSection() {
  return (
    <Section id="data-intelligence" className="relative bg-black/30">
      <div className="max-w-3xl space-y-5">
        <div className="inline-flex rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan">
          Data Intelligence
        </div>
        <H2 className="text-3xl sm:text-4xl lg:text-5xl">Turn public data into business leverage.</H2>
        <Body className="max-w-2xl text-slate-300">
          We build authorized data extraction, monitoring, and reporting systems that turn public and
          permitted sources into dashboards, alerts, and decision-ready intelligence.
        </Body>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">What we build</h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {capabilities.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-slate-200">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Product ideas we can stand up</h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {productIdeas.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-slate-200">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5 text-sm leading-6 text-slate-400">
        Every engagement is built for authorized or publicly accessible sources only. We do not bypass
        authentication, paywalls, CAPTCHAs, rate limits, or platform terms, and we do not access private
        systems.
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Button href="/pricing#custom-public-data-scraper" glow="gradient">
          Explore Data Products
        </Button>
        <Link href="/data-intelligence" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10">
          Learn More
        </Link>
      </div>
    </Section>
  );
}
