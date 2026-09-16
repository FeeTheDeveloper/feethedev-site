'use client';

import { useState } from 'react';
import { PricingGrid } from '@/components/pricing/PricingGrid';
import { AddOnCatalog } from '@/components/pricing/AddOnCatalog';
import { VeteranDiscountCard } from '@/components/veteran/VeteranDiscountCard';

export function PricingPageClient() {
  const [veteranMode, setVeteranMode] = useState(false);

  return (
    <>
      <label className="mt-6 inline-flex cursor-pointer items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200">
        <input
          type="checkbox"
          checked={veteranMode}
          onChange={(event) => setVeteranMode(event.target.checked)}
          className="h-4 w-4 accent-greenglow"
        />
        Preview veteran pricing (20% off eligible packages)
      </label>

      <section className="mx-auto mt-12 max-w-6xl">
        <h2 className="text-2xl font-bold text-white">Core Packages</h2>
        <div className="mt-6">
          <PricingGrid veteranMode={veteranMode} />
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl">
        <h2 className="text-2xl font-bold text-white">Add-Ons</h2>
        <p className="mt-2 max-w-2xl text-slate-400">Modular services you can add to any package or purchase standalone.</p>
        <div className="mt-6">
          <AddOnCatalog />
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl">
        <VeteranDiscountCard />
      </section>
    </>
  );
}
