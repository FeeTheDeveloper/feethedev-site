'use client';

import { motion } from 'framer-motion';
import { Body, Button, Card, H2, Section } from '@/components/ui';

const packages = [
  {
    name: 'Launch',
    price: 'Custom Quote',
    tagline: 'For a business that needs a professional digital foundation.',
    features: [
      'Custom business website',
      'Mobile-first responsive build',
      'Lead/contact workflow',
      'Basic analytics + SEO foundation',
      'Deployment + launch support',
    ],
  },
  {
    name: 'Presence Bundle',
    price: 'Best Value',
    tagline: 'Website plus the public business profiles customers search first.',
    featured: true,
    features: [
      'Everything in Launch',
      'Google Business Profile setup + verification support',
      'Apple Business Connect setup',
      'Yelp business profile setup or cleanup',
      'Business information consistency across platforms',
      'Branded email and contact-point alignment',
    ],
  },
  {
    name: 'Full Business System',
    price: 'Custom Scope',
    tagline: 'Technology execution plus Hutchrok business solutions.',
    features: [
      'Everything in Presence Bundle',
      'Direct Hutchrok Solutions Group handoff',
      'Business infrastructure review',
      'Automation and workflow planning',
      'Payments, booking, CRM, or back-office integrations',
      'Custom software or dashboard options',
    ],
  },
];

export function PackagesSection() {
  return (
    <Section id="packages" className="relative bg-black/30">
      <div className="space-y-10">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex rounded-full border border-redglow/25 bg-redglow/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-redglow">
            Bundled Solutions
          </div>
          <H2 className="text-3xl sm:text-4xl lg:text-5xl">
            Stop paying separate vendors for pieces that should work together.
          </H2>
          <Body className="max-w-2xl text-slate-300">
            Our bundles combine development with business-presence execution so the website, listings, brand information, contact points, and operating tools launch as one system. Final pricing is quoted to scope so clients only pay for what the business actually needs.
          </Body>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <Card
                accent={item.featured ? 'green' : 'neutral'}
                className={`h-full p-6 ${item.featured ? 'ring-1 ring-greenglow/30' : ''}`}
              >
                {item.featured && (
                  <div className="mb-5 inline-flex rounded-full border border-greenglow/25 bg-greenglow/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-greenglow">
                    Recommended
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
                <div className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {item.price}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.tagline}</p>
                <div className="mt-6 space-y-3">
                  {item.features.map((feature) => (
                    <div key={feature} className="flex gap-3 text-sm leading-6 text-slate-200">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-greenglow" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-7">
                  <Button href="/start" glow={item.featured ? 'gradient' : undefined}>
                    Build My Package
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
