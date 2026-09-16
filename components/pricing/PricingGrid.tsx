'use client';

import { useState } from 'react';
import { Card } from '@/components/ui';
import { CheckoutButton } from '@/components/checkout/CheckoutButton';
import { coreProducts, formatUsd, veteranPriceCents } from '@/lib/products';

export function PricingGrid({ veteranMode }: { veteranMode: boolean }) {
  const [featuredId] = useState('digital-presence-bundle');

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {coreProducts.map((product) => {
        const featured = product.id === featuredId;
        const displayPrice = veteranMode && product.veteranEligible ? veteranPriceCents(product.priceCents) : product.priceCents;
        return (
          <Card key={product.id} accent={featured ? 'green' : 'neutral'} className={`flex h-full flex-col p-6 ${featured ? 'ring-1 ring-greenglow/30' : ''}`}>
            {featured && (
              <div className="mb-4 inline-flex w-fit rounded-full border border-greenglow/25 bg-greenglow/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-greenglow">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold text-white">{product.name}</h3>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-white">{formatUsd(displayPrice)}</span>
              {product.billing === 'monthly' && <span className="text-sm text-slate-400">/month</span>}
              {veteranMode && product.veteranEligible && (
                <span className="text-sm text-slate-500 line-through">{formatUsd(product.priceCents)}</span>
              )}
            </div>
            {veteranMode && product.veteranEligible && (
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-greenglow">Veteran pricing applied at checkout</div>
            )}
            <p className="mt-4 text-sm leading-6 text-slate-300">{product.description}</p>
            <ul className="mt-5 flex-1 space-y-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-sm text-slate-200">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-greenglow" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <CheckoutButton priceId={product.stripePriceId} label={product.ctaLabel} />
            </div>
          </Card>
        );
      })}
    </div>
  );
}
