import type { Metadata } from 'next';
import { ProjectIntakeForm } from '@/components/ProjectIntakeForm';

export const metadata: Metadata = {
  title: 'Start Your Build',
  description: 'Qualify your software, automation, website, or e-commerce project with Fee The Developer.',
};

export default function StartPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background py-20">
      <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <section className="space-y-6 lg:sticky lg:top-12">
          <a href="/" className="text-sm uppercase tracking-[0.2em] text-slate-300">← Fee The Developer</a>
          <p className="text-sm uppercase tracking-[0.28em] text-greenglow">Project Qualification</p>
          <h1 className="text-5xl font-semibold uppercase leading-[0.92] text-white sm:text-6xl">Build the system your business actually needs.</h1>
          <p className="text-lg leading-8 text-slate-300">Tell us what must change operationally or commercially. We will review scope, fit, timeline, and the correct production path before the strategy session.</p>
          <ul className="space-y-3 text-slate-200"><li>✓ Veteran-owned execution standards</li><li>✓ Software, automation, commerce, and integrations</li><li>✓ Clear scope before production begins</li></ul>
        </section>
        <ProjectIntakeForm />
      </div>
    </main>
  );
}
