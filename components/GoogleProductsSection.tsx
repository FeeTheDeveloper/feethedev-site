'use client';

import { motion } from 'framer-motion';
import { Body, Card, H2, Section } from '@/components/ui';
import { SignalArtwork } from '@/components/SignalArtwork';
import { siteConfig } from '@/lib/site-config';

export function GoogleProductsSection() {
  return (
    <Section
      id="google-products"
      className="relative overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-y-0 right-[-10rem] w-80 rounded-full bg-greenglow/10 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10 lg:p-12"
      >
        <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
          Google Product Suite
        </div>
        <div className="mt-5 grid gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <H2 className="text-3xl sm:text-4xl lg:text-5xl">
              Google products, shaped into a working system
            </H2>
            <Body className="mt-5 max-w-2xl text-slate-300">
              Search, Workspace, cloud storage, collaboration, and AI are most
              useful when they share a clear operating model. We connect the
              tools to the way your team actually works.
            </Body>
            <div className="mt-8 grid gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {siteConfig.googleProducts.map((product) => (
                <Card key={product.name} className="h-full p-5">
                  <div className="text-xs font-medium uppercase tracking-[0.18em] text-greenglow">
                    Connected tool
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {product.detail}
                  </p>
                </Card>
              ))}
            </div>
          </div>
          <SignalArtwork
            src="/google_product_suite.PNG"
            alt="Fee The Developer artwork featuring Google Search, Gemini, Drive, Docs, Sheets, Photos, Maps, and Meet"
            variant="green"
          />
        </div>
      </motion.div>
    </Section>
  );
}
