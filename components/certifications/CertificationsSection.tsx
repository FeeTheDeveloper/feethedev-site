import { certifications } from '@/lib/certifications';
import { CertificationCard } from '@/components/certifications/CertificationCard';
import { Body, H2, Section } from '@/components/ui';

export function CertificationsSection() {
  return (
    <Section id="certifications" className="relative bg-black/30">
      <div className="max-w-3xl space-y-5">
        <div className="inline-flex rounded-full border border-electric/25 bg-electric/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-electric">
          Certifications &amp; Credentials
        </div>
        <H2 className="text-3xl sm:text-4xl lg:text-5xl">Proof, not just a portfolio.</H2>
        <Body className="max-w-2xl text-slate-300">
          Business intelligence, data workflows, and analytical decision-making credentials that
          directly strengthen how we design dashboards, reporting, and public-data systems.
        </Body>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {certifications.map((certification) => (
          <CertificationCard key={certification.title} certification={certification} />
        ))}
      </div>
    </Section>
  );
}
