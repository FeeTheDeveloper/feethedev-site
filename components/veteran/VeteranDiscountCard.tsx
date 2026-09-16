'use client';

import { FormEvent, useState } from 'react';
import { coreProducts, formatUsd, veteranPriceCents } from '@/lib/products';

const fieldClass =
  'w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-greenglow/60 focus:ring-2 focus:ring-greenglow/20';

export function VeteranDiscountCard() {
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('sending');
    const data = new FormData(event.currentTarget);
    try {
      const response = await fetch('/api/veteran-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          branch: data.get('branch'),
          notes: data.get('notes'),
        }),
      });
      if (!response.ok) throw new Error('Request failed.');
      setState('success');
    } catch {
      setState('error');
    }
  }

  return (
    <div className="neon-border grid gap-8 rounded-[2rem] border border-white/10 bg-black/45 p-7 backdrop-blur-xl lg:grid-cols-2 lg:p-10">
      <div className="space-y-5">
        <div className="inline-flex rounded-full border border-redglow/30 bg-redglow/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-redglow">
          Veteran Discount
        </div>
        <h3 className="text-3xl font-bold text-white sm:text-4xl">20% off for verified veterans</h3>
        <p className="leading-7 text-slate-300">
          Submit a quick verification request and we&apos;ll follow up with your veteran promo code by
          email once confirmed. The code applies at Stripe checkout on any eligible package.
        </p>
        <ul className="space-y-2 text-sm text-slate-200">
          {coreProducts
            .filter((product) => product.veteranEligible)
            .map((product) => (
              <li key={product.id} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2">
                <span>{product.name}</span>
                <span>
                  <span className="text-slate-500 line-through">{formatUsd(product.priceCents)}</span>{' '}
                  <span className="font-bold text-greenglow">{formatUsd(veteranPriceCents(product.priceCents))}</span>
                  {product.billing === 'monthly' ? '/mo' : ''}
                </span>
              </li>
            ))}
        </ul>
      </div>

      {state === 'success' ? (
        <div className="flex items-center rounded-2xl border border-greenglow/30 bg-greenglow/10 p-6" role="status">
          <p className="text-slate-100">
            Thank you for your service. Your verification request is in — we&apos;ll email your veteran
            promo code once confirmed.
          </p>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-4 self-start rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <label className="space-y-2 text-sm text-slate-200">
            Name *<input className={fieldClass} name="name" required autoComplete="name" />
          </label>
          <label className="space-y-2 text-sm text-slate-200">
            Email *<input className={fieldClass} name="email" type="email" required autoComplete="email" />
          </label>
          <label className="space-y-2 text-sm text-slate-200">
            Branch of service
            <input className={fieldClass} name="branch" placeholder="e.g. Army, Navy, Marine Corps" />
          </label>
          <label className="space-y-2 text-sm text-slate-200">
            Notes
            <textarea className={fieldClass} name="notes" rows={3} placeholder="Anything that helps us verify quickly." />
          </label>
          <button
            type="submit"
            disabled={state === 'sending'}
            className="w-full rounded-full bg-white px-6 py-3 font-bold text-black transition hover:-translate-y-0.5 disabled:opacity-60"
          >
            {state === 'sending' ? 'Submitting…' : 'Request Veteran Verification'}
          </button>
          {state === 'error' && <p className="text-sm text-red-300" role="alert">Something went wrong — email contact@feethedeveloper.com instead.</p>}
        </form>
      )}
    </div>
  );
}
