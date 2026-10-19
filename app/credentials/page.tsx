import type { Metadata } from 'next';
import { PageIntro } from '@/components/PageIntro';
import { Section } from '@/components/ui';
import { credentials } from '@/lib/credentials';

export const metadata: Metadata = {
  title: 'Credentials',
  description:
    'Review source-linked continuing education credentials completed by a Fee The Developer team member.',
  alternates: { canonical: '/credentials' },
};

const featuredCredential = credentials[0];
const courseCredentials = credentials.slice(1);
const credentialCount = credentials.length;
const courseCredentialCount = courseCredentials.length;

export default function CredentialsPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <PageIntro
        eyebrow="Credentials / Verified learning"
        title={
          <>
            Continuing education,{' '}
            <span className="ftd-gradient-text">linked to its source.</span>
          </>
        }
        description={`Review one professional certificate and ${courseCredentialCount} course records completed through Coursera by a Fee The Developer team member. These records describe individual continuing education; they do not represent company certification or endorsement by any course provider or Coursera.`}
        aside={
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan">
              Evidence standard
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
              <li>Direct source record for every credential</li>
              <li>Individual learning stated without company endorsement</li>
              <li>Issue dates and providers presented as recorded</li>
            </ul>
          </div>
        }
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
              Verified learning
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              {credentialCount} credentials, each linked to its source record.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-300">
              Open the professional certificate or expand the course list to
              verify each record directly with its source.
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
                  View all {courseCredentialCount} course certificates
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
    </main>
  );
}
