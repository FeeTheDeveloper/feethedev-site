'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { MerchCheckoutLinks, MerchProduct } from '@/lib/merch';
import { shippingRateUsd } from '@/lib/merch';

type Props = {
  product: MerchProduct;
  checkoutLinks: MerchCheckoutLinks;
  contactEmail: string;
};

const selectClass =
  'mt-2 block w-full rounded-xl border border-white/15 bg-[#101722] px-3 py-2.5 text-sm font-normal normal-case tracking-normal text-white';
const labelClass =
  'text-xs font-semibold uppercase tracking-[0.14em] text-slate-300';

export function MerchCard({ product, checkoutLinks, contactEmail }: Props) {
  const [colorSlug, setColorSlug] = useState(product.variants[0].colorSlug);
  const [size, setSize] = useState(product.sizes[0] ?? '');
  const prefersReducedMotion = useReducedMotion();

  const variant =
    product.variants.find((item) => item.colorSlug === colorSlug) ??
    product.variants[0];
  const checkoutLink = checkoutLinks[variant.colorSlug] ?? null;

  let buyHref = checkoutLink;
  if (buyHref) {
    const url = new URL(buyHref);
    // Records the shopper's picks on the Checkout Session for fulfillment.
    url.searchParams.set(
      'client_reference_id',
      [product.slug, variant.colorSlug, size.toLowerCase()]
        .filter(Boolean)
        .join('-'),
    );
    buyHref = url.toString();
  }

  const inquiry = new URL(`mailto:${contactEmail}`);
  inquiry.searchParams.set(
    'subject',
    `Fee The Developer ${product.name} inquiry`,
  );
  inquiry.searchParams.set(
    'body',
    `I am interested in the ${product.name} ($${product.price}, plus $${shippingRateUsd} shipping).\nColor: ${variant.color}\n${size ? `Size: ${size}\n` : ''}Please confirm availability and delivery before I order.`,
  );

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#e9e9ea]">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={`${product.slug}-${variant.colorSlug}`}
            initial={
              prefersReducedMotion ? false : { opacity: 0, scale: 1.025 }
            }
            animate={{ opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.24 }}
            className="absolute inset-0"
          >
            {variant.imageCrop ? (
              <svg
                role="img"
                aria-label={variant.imageAlt}
                viewBox={`${variant.imageCrop.x} ${variant.imageCrop.y} ${variant.imageCrop.width} ${variant.imageCrop.height}`}
                className="h-full w-full"
              >
                <image href={variant.image} width="1536" height="1024" />
              </svg>
            ) : (
              <Image
                src={variant.image}
                alt={variant.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain"
              />
            )}
          </motion.div>
        </AnimatePresence>
        <span className="absolute bottom-3 left-3 rounded-full border border-slate-950/10 bg-white/90 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-slate-950 shadow-sm backdrop-blur">
          {variant.color}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-white">{product.name}</h3>
          <span className="font-bold tabular-nums text-greenglow">
            ${product.price}
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          {product.detail}
        </p>

        <div className="mt-auto grid gap-3 pt-5">
          <fieldset>
            <legend
              className={`${labelClass} flex w-full justify-between gap-3`}
            >
              <span>Preview color</span>
              <span className="normal-case tracking-normal text-white">
                {variant.color}
              </span>
            </legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.variants.map((option) => {
                const isSelected = option.colorSlug === variant.colorSlug;

                return (
                  <button
                    key={option.colorSlug}
                    type="button"
                    aria-label={`Preview ${product.name} in ${option.color}`}
                    aria-pressed={isSelected}
                    onClick={() => setColorSlug(option.colorSlug)}
                    className={`grid h-10 w-10 place-items-center rounded-full border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-[#101722] ${
                      isSelected
                        ? 'scale-105 border-white bg-white/15 shadow-[0_0_0_2px_rgba(45,130,255,0.9)]'
                        : 'border-white/20 bg-white/[0.04] hover:border-white/60 hover:bg-white/10'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="h-6 w-6 rounded-full border border-slate-950/20 shadow-inner"
                      style={{ backgroundColor: option.swatch }}
                    />
                  </button>
                );
              })}
            </div>
            <p className="sr-only" aria-live="polite">
              {`${product.name} preview changed to ${variant.color}.`}
            </p>
          </fieldset>

          {product.sizes.length > 0 && (
            <label className={labelClass}>
              Size
              <select
                value={size}
                onChange={(event) => setSize(event.target.value)}
                className={selectClass}
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

        {checkoutLink && product.sizes.length > 0 && (
          <p className="mt-3 text-xs leading-5 text-slate-400">
            Confirm size {size} in Stripe checkout.
          </p>
        )}

        <a
          href={buyHref ?? inquiry.toString()}
          target={buyHref ? '_blank' : undefined}
          rel={buyHref ? 'noopener noreferrer' : undefined}
          className={`mt-4 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-bold text-white ${buyHref ? 'bg-electric hover:bg-blue-500' : 'border border-white/20 hover:bg-white/10'}`}
        >
          {buyHref ? 'Buy with Stripe' : 'Ask about this piece'}
        </a>
      </div>
    </article>
  );
}
