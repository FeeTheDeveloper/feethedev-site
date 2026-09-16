import type { Metadata } from 'next';
import Link from 'next/link';
import { DataIntelligenceSection } from '@/components/data-intelligence/DataIntelligenceSection';
import { LeadCaptureForm } from '@/components/shared/LeadCaptureForm';

export const metadata: Metadata = {
  title: 'Data Intelligence',
  description:
    'Authorized public-data extraction, monitoring, and business intelligence systems from Fee The Developer.',
};

export default function DataIntelligencePage() {
  return (
    <main className="min-h-screen text-white">
      <section className="px-6 pb-2 pt-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <Link href="/" className="text-sm uppercase tracking-[0.2em] text-slate-300">
            ← Fee The Developer
          </Link>
        </div>
      </section>
      <h1 className="sr-only">Data Intelligence — Turn Public Data Into Business Leverage</h1>
      <DataIntelligenceSection />
      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl">
          <LeadCaptureForm
            source="data-intelligence"
            heading="Talk to us about a data intelligence build"
            description="Tell us what you're trying to monitor, extract, or turn into a dashboard. We'll follow up to scope it."
            messageLabel="What do you want to monitor or extract?"
            messagePlaceholder="e.g. competitor pricing across 20 listing pages, updated daily"
          />
        </div>
      </section>
    </main>
  );
}
