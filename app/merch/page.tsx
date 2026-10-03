import type { Metadata } from 'next';
import Image from 'next/image';
import { MerchOptions } from '@/components/MerchOptions';
import { merchProducts, verifiedStripeLink } from '@/lib/merch';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Merch',
  description:
    'Explore Fee The Developer graphic hoodies, joggers, T-shirts, and hats.',
  alternates: { canonical: '/merch' },
};

const checkoutLinks: Record<string, string | null> = {
  hoodie: verifiedStripeLink(process.env.MERCH_HOODIE_STRIPE_LINK),
  joggers: verifiedStripeLink(process.env.MERCH_JOGGERS_STRIPE_LINK),
  tshirt: verifiedStripeLink(process.env.MERCH_TSHIRT_STRIPE_LINK),
  hat: verifiedStripeLink(process.env.MERCH_HAT_STRIPE_LINK),
};

export default function MerchPage() {
  return (
    <main id="main-content" className="min-h-screen pb-24">
      <section className="shell grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:py-24">
        <div>
          <p className="status-chip">Fee The Developer / Merch line</p>
          <h1 className="mt-6 max-w-xl text-5xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl">
            Wear the <span className="ftd-gradient-text">build.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
            The Fee The Developer line, led by the white front-to-back hoodie.
            Build. Automate. Create. Scale.
          </p>
          <a
            href="#collection"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 hover:bg-slate-200"
          >
            Explore the collection
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <figure className="overflow-hidden rounded-3xl bg-[#e8e8e8]">
            <Image
              src="/merch/white-hoodie-front.png"
              alt="White Fee The Developer hoodie, front view with colorful wordmark"
              width={1536}
              height={864}
              priority
              className="h-full w-full object-cover"
            />
            <figcaption className="sr-only">White hoodie front</figcaption>
          </figure>
          <figure className="overflow-hidden rounded-3xl bg-[#e8e8e8]">
            <Image
              src="/merch/white-hoodie-back.png"
              alt="White Fee The Developer hoodie, back view with globe and Autonomy Has Levels artwork"
              width={1536}
              height={864}
              priority
              className="h-full w-full object-cover"
            />
            <figcaption className="sr-only">White hoodie back</figcaption>
          </figure>
        </div>
      </section>

      <section id="collection" className="shell scroll-mt-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-electric">
              The full line
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Pick your piece.
            </h2>
          </div>
          <p className="text-sm text-slate-400">
            Prices in USD · Shipping $12.99
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {merchProducts.map((product) => {
            const checkoutLink = checkoutLinks[product.slug];
            return (
              <article
                key={product.slug}
                className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#dedede]">
                  {product.slug === 'hoodie' ? (
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  ) : (
                    <div
                      role="img"
                      aria-label={product.imageAlt}
                      className="h-full w-full bg-no-repeat"
                      style={{
                        backgroundImage: `url(${product.image})`,
                        backgroundSize: '400% auto',
                        backgroundPosition: `0% ${product.slug === 'tshirt' ? '35%' : product.slug === 'joggers' ? '70%' : '100%'}`,
                      }}
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-white">
                      {product.name}
                    </h3>
                    <span className="font-bold tabular-nums text-greenglow">
                      ${product.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {product.detail}
                  </p>
                  <p className="mt-3 text-xs leading-5 text-slate-400">
                    {product.colors.join(' · ')}
                    {product.sizes.length > 0 && (
                      <>
                        <br />
                        Sizes {product.sizes.join(' · ')}
                      </>
                    )}
                  </p>
                  <MerchOptions
                    product={product}
                    checkoutLink={checkoutLink}
                    contactEmail={siteConfig.email}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="shell mt-20">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#d9d9d9] p-3 sm:p-6">
          <Image
            src="/merch/full-line-reference.png"
            alt="Full Fee The Developer merch concept showing hoodie, T-shirt, jogger, and snapback designs in white, gray, blue, red, and green"
            width={1536}
            height={1024}
            sizes="100vw"
            className="h-auto w-full rounded-2xl"
          />
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-400">
          Approved color line: white, heather gray, royal blue, vivid red, and
          sage green. Apparel sizes: S, M, L, and XL. Hats are snapbacks.
          Availability and shipping destinations are confirmed before purchase.
        </p>
      </section>
      <section className="shell mt-16 grid gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:grid-cols-[1fr_1.2fr] sm:items-center sm:p-10">
        <div className="max-w-sm overflow-hidden rounded-2xl bg-white">
          <Image
            src="/merch/black-hoodie-reference.png"
            alt="Black Fee The Developer hoodie reference design"
            width={493}
            height={657}
            sizes="(max-width: 640px) 100vw, 40vw"
            className="h-auto w-full"
          />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-greenglow">
            Alternate concept
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            The black hoodie reference.
          </h2>
          <p className="mt-4 max-w-lg leading-7 text-slate-300">
            A second graphic direction from the supplied artwork. Ask about
            availability before ordering.
          </p>
        </div>
      </section>
    </main>
  );
}
