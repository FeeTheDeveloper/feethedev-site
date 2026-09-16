import type { Metadata } from 'next';
import Link from 'next/link';
import { PricingPageClient } from '@/components/pricing/PricingPageClient';

export const metadata: Metadata = {
  title: 'Pricing & Packages',
  description:
    'Fee The Developer pricing for website launches, business presence bundles, custom software, add-ons, and veteran discounts.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen px-6 py-20 text-white sm:px-8 lg:px-12">
      <section className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm uppercase tracking-[0.2em] text-slate-300">
          ← Fee The Developer
        </Link>
        <h1 className="mt-8 max-w-4xl text-5xl font-extrabold uppercase leading-[0.9] sm:text-6xl">
          Pricing &amp; Packages
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Core packages, individual add-ons, and monthly support — all backed by the same live Stripe
          checkout. No fake scarcity, no hidden fees.
        </p>
      </section>
      <PricingPageClient />
    </main>
  );
}
