'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

type CheckoutButtonProps = {
  priceId: string;
  label: string;
  className?: string;
};

export function CheckoutButton({ priceId, label, className }: CheckoutButtonProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  async function startCheckout() {
    setStatus('loading');
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });
      const data = await response.json();
      if (!response.ok || !data.url) {
        throw new Error(data.error ?? 'Checkout failed.');
      }
      window.location.href = data.url;
    } catch {
      setStatus('error');
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={startCheckout}
        disabled={status === 'loading'}
        className={cn(
          'w-full rounded-full bg-gradient-to-r from-redglow via-white to-greenglow p-[1px] transition disabled:opacity-60',
          className,
        )}
      >
        <span className="block rounded-full bg-black px-6 py-3 text-center font-bold uppercase tracking-[0.12em] text-white">
          {status === 'loading' ? 'Redirecting…' : label}
        </span>
      </button>
      {status === 'error' && (
        <p role="alert" className="mt-2 text-sm text-red-300">
          Checkout is temporarily unavailable. Email {' '}
          <a className="underline" href="mailto:contact@feethedeveloper.com">
            contact@feethedeveloper.com
          </a>{' '}
          instead.
        </p>
      )}
    </div>
  );
}
