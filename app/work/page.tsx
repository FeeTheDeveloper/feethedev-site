import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/PageIntro';
import { PortfolioCatalog } from '@/components/work/PortfolioCatalog';
import { Button as CtaLink, Section } from '@/components/ui';
import { credentials } from '@/lib/credentials';

export const metadata: Metadata = {
  title: 'Selected work',
  description:
    'Explore selected Fee The Developer websites, products, business systems, booking experiences, media platforms, and technical case studies.',
  alternates: { canonical: '/work' },
};

const featuredCredential = credentials[0];
const courseCredentials = credentials.slice(1);

export default function WorkPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <PageIntro
        eyebrow="Work / Verified examples"
        title={
          <>
            Different businesses.{' '}
            <span className="ftd-gradient-text">One delivery standard.</span>
          </>
        }
        description="Selected work across public websites, customer-facing products, connected operations, and technical systems. Every example states what is live, what is still under review, and what Fee The Developer delivered."
        aside={
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan">
              Evidence standard
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
              <li>Verified destination or repository</li>
              <li>Specific delivery role and capability proof</li>
              <li>Honest live, review, or case-study status</li>
            </ul>
          </div>
        }
      />

      <Section>
        <PortfolioCatalog />
      </Section>

      <Section className="border-t border-white/10 bg-black/20">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
              Verified learning
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              22 credentials, each linked to its source record.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-300">
              A Fee The Developer team member completed one professional
              certificate and 21 courses through Coursera. These records
              describe individual continuing education; they do not represent a
              company certification or endorsement by any course provider or
              Coursera.
            </p>
          </div>

          <div>
            <article className="rounded-[1.5rem] border border-greenglow/35 bg-greenglow/[0.08] p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-greenglow">
                <span>{featuredCredential.kind}</span>
                <span aria-hidden="true">/</span>
                <span>{featuredCredential.issuer}</span>
              </div>
              <h3 className="mt-3 text-2xl font-semibold leading-snug text-white">
                {featuredCredential.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                Issued {featuredCredential.issuedOn}
              </p>
              <a
                href={featuredCredential.verificationUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:bg-greenglow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenglow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1018] active:translate-y-px motion-reduce:transition-none"
              >
                Verify professional certificate ↗
              </a>
            </article>

            <details className="group mt-4 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 sm:p-6">
              <summary className="cursor-pointer list-none rounded-xl text-sm font-semibold uppercase tracking-[0.15em] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenglow/60">
                <span className="flex items-center justify-between gap-4">
                  View all 21 course certificates
                  <span
                    aria-hidden="true"
                    className="text-greenglow transition group-open:rotate-45 motion-reduce:transition-none"
                  >
                    +
                  </span>
                </span>
              </summary>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {courseCredentials.map((credential) => (
                  <article
                    key={credential.verificationCode}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-cyan">
                      {credential.issuer}
                    </p>
                    <h3 className="mt-2 font-semibold leading-snug text-white">
                      {credential.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-400">
                      Issued {credential.issuedOn}
                    </p>
                    <a
                      href={credential.verificationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.13em] text-greenglow underline decoration-greenglow/30 underline-offset-4 transition hover:decoration-greenglow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenglow/60"
                    >
                      Verify ↗
                    </a>
                  </article>
                ))}
              </div>
            </details>
          </div>
        </div>
      </Section>

      <Section className="border-t border-white/10 bg-black/25">
        <div className="grid gap-8 rounded-[1.75rem] border border-electric/25 bg-electric/[0.08] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-cyan">
              Your next system
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
              Start with the business problem, not a template.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              Share the current bottleneck and the outcome you need. We will
              identify the smallest useful build and define the connected path
              from there.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CtaLink href="/start">Start a project</CtaLink>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenglow/50"
            >
              Explore services
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
