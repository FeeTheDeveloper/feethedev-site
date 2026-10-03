'use client';

import { useState } from 'react';
import type { MerchProduct } from '@/lib/merch';

type Props = {
  product: MerchProduct;
  checkoutLink: string | null;
  contactEmail: string;
};

export function MerchOptions({ product, checkoutLink, contactEmail }: Props) {
  const [color, setColor] = useState<string>(product.colors[0]);
  const [size, setSize] = useState<string>(product.sizes[0] ?? '');

  const inquiry = new URL(`mailto:${contactEmail}`);
  inquiry.searchParams.set(
    'subject',
    `Fee The Developer ${product.name} inquiry`,
  );
  inquiry.searchParams.set(
    'body',
    `I am interested in the ${product.name} ($${product.price}, plus $12.99 shipping).\nColor: ${color}\n${size ? `Size: ${size}\n` : ''}Please confirm availability and delivery before I order.`,
  );

  return (
    <div className="mt-auto pt-5">
      {checkoutLink ? (
        <p className="mb-3 text-xs leading-5 text-slate-400">
          Select your color{product.sizes.length ? ' and size' : ''} in Stripe
          checkout.
        </p>
      ) : (
        <div className="mb-4 grid gap-3">
          <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
            Color
            <select
              value={color}
              onChange={(event) => setColor(event.target.value)}
              className="mt-2 block w-full rounded-xl border border-white/15 bg-[#101722] px-3 py-2.5 text-sm font-normal normal-case tracking-normal text-white"
            >
              {product.colors.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          {product.sizes.length > 0 && (
            <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
              Size
              <select
                value={size}
                onChange={(event) => setSize(event.target.value)}
                className="mt-2 block w-full rounded-xl border border-white/15 bg-[#101722] px-3 py-2.5 text-sm font-normal normal-case tracking-normal text-white"
              >
                {product.sizes.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>
      )}
      <a
        href={checkoutLink ?? inquiry.toString()}
        target={checkoutLink ? '_blank' : undefined}
        rel={checkoutLink ? 'noopener noreferrer' : undefined}
        className={`inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-bold text-white ${checkoutLink ? 'bg-electric hover:bg-blue-500' : 'border border-white/20 hover:bg-white/10'}`}
      >
        {checkoutLink ? 'Buy with Stripe' : 'Ask about this piece'}
      </a>
    </div>
  );
}
