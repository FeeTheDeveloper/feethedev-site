import Link from 'next/link';
import { Body, H2, Section } from '@/components/ui';
import { AddOnCatalog } from '@/components/pricing/AddOnCatalog';

export function AddOnsTeaserSection() {
  return (
    <Section id="add-ons" className="relative bg-background">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
            Add-Ons
          </div>
          <H2 className="text-3xl sm:text-4xl">Modular services, priced individually.</H2>
          <Body className="text-slate-300">Add exactly what the business needs — on top of a package or standalone.</Body>
        </div>
        <Link href="/pricing" className="font-bold text-white underline underline-offset-4">
          View full pricing →
        </Link>
      </div>
      <div className="mt-10">
        <AddOnCatalog />
      </div>
    </Section>
  );
}
