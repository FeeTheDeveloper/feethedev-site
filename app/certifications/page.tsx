import type { Metadata } from 'next';
import Link from 'next/link';
import { certifications } from '@/lib/certifications';
import { CertificationCard } from '@/components/certifications/CertificationCard';

export const metadata: Metadata = {
  title: 'Certifications & Credentials',
  description:
    'Verified technical and business intelligence credentials behind Fee The Developer, with working verification links.',
};

export default function CertificationsPage() {
  return (
    <main className="min-h-screen px-6 py-20 text-white sm:px-8 lg:px-12">
      <section className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm uppercase tracking-[0.2em] text-slate-300">
          ← Fee The Developer
        </Link>
        <div className="mt-8 inline-flex rounded-full border border-electric/30 bg-electric/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-electric">
          Certifications &amp; Credentials
        </div>
        <h1 className="mt-6 max-w-3xl text-5xl font-extrabold uppercase leading-[0.9] sm:text-6xl">
          Verified Credentials
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Every credential listed here links directly to its issuing platform for independent
          verification. Nothing here implies a formal partnership with the issuing company beyond the
          credential itself.
        </p>
      </section>
      <section className="mx-auto mt-16 grid max-w-5xl gap-8">
        {certifications.map((certification) => (
          <CertificationCard key={certification.title} certification={certification} />
        ))}
      </section>
    </main>
  );
}
