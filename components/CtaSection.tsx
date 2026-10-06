import Image from 'next/image';
import { Body, Button, H2, Section } from '@/components/ui';
import { siteConfig } from '@/lib/site-config';

export function CtaSection() {
  return (
    <Section id="contact" className="bg-background pb-24 pt-10 sm:pb-28">
      <div className="grid overflow-hidden rounded-[2rem] border border-white/15 bg-[#0b1018] shadow-[0_26px_100px_rgba(0,0,0,0.45)] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <div className="relative z-10 flex flex-col justify-center p-7 sm:p-10 lg:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-greenglow">
            Build with Fee The Developer
          </p>
          <H2 className="mt-5 max-w-xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Your next move starts with a clear plan.
          </H2>
          <Body className="mt-5 max-w-xl text-lg text-slate-300">
            Tell us what you are building. We will help connect the site,
            software, and systems needed to move it forward.
          </Body>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/start" glow="gradient">
              Start your project
            </Button>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-semibold text-slate-200 underline decoration-white/30 underline-offset-4 transition hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-greenglow"
            >
              Email us
            </a>
          </div>
          <p className="mt-10 text-xs uppercase tracking-[0.16em] text-slate-400">
            Based in {siteConfig.location}
          </p>
        </div>
        <div className="relative min-h-72 overflow-hidden border-t border-white/10 bg-[#05070b] sm:min-h-96 lg:min-h-[32rem] lg:border-l lg:border-t-0">
          <Image
            src="/brand/ftd-cta-system.webp"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070b]/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-[#05070b]/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm sm:bottom-8 sm:left-8">
            Build · Automate · Create · Scale
          </div>
        </div>
      </div>
    </Section>
  );
}
