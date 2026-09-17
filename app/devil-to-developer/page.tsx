import type { Metadata } from 'next';
import { InteriorHero } from '@/components/InteriorHero';
import { Body, Button, H2, Section } from '@/components/ui';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Devil To Developer',
  description:
    'Devil To Developer is a Fee The Developer initiative centered on lawful skills, real builds, and visible proof of learning.',
  alternates: { canonical: '/devil-to-developer' },
};

const pillars = [
  {
    number: '01',
    title: 'Redirect the skill',
    description:
      'Turn curiosity about systems into lawful web development, automation, and defensive security practice.',
  },
  {
    number: '02',
    title: 'Build in the open',
    description:
      'Use owned projects and approved practice environments to learn by making useful things.',
  },
  {
    number: '03',
    title: 'Document the proof',
    description:
      'Explain decisions, show reviewed code, and collect demonstrations that reflect work actually completed.',
  },
];

export default function DevilToDeveloperPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <InteriorHero
        eyebrow="Fee The Developer / Initiative"
        title={
          <>
            Devil to <span className="ftd-gradient-text">Developer.</span>
          </>
        }
        description="Same drive. Better direction. This initiative channels resourcefulness into software, practical automation, ethical security, and a portfolio built on work you can show."
        actions={[
          { label: 'Explore the learning path', href: '/apprenticeship' },
          {
            label: 'Talk with us',
            href: `mailto:${siteConfig.email}?subject=Devil%20To%20Developer`,
            secondary: true,
          },
        ]}
      >
        <div className="max-w-xl rounded-2xl border border-white/10 bg-black/45 p-5 text-sm leading-6 text-slate-200 backdrop-blur-lg">
          Learn on systems you own or have permission to use. Show the work,
          respect boundaries, and build a path forward.
        </div>
      </InteriorHero>

      <Section className="bg-background">
        <div className="mb-10 max-w-3xl space-y-4">
          <p className="status-chip">The approach</p>
          <H2 className="text-3xl sm:text-4xl">
            From potential to practical work.
          </H2>
          <Body>
            The focus is simple: learn an ethical skill, apply it in a safe
            environment, and make the result understandable to someone else.
          </Body>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.number} className="glass-panel p-7">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
                {pillar.number} / Build
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/10 bg-panel/50">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="status-chip">Keep going</p>
            <H2 className="text-3xl sm:text-4xl">
              A learning path with room to grow.
            </H2>
            <Body>
              Explore the developer path from fundamentals to reviewed project
              work. Opportunities depend on readiness and availability;
              participation does not guarantee a role or income.
            </Body>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button href="/apprenticeship">View the path</Button>
            <Button href="/" variant="outline" glow="green">
              Back to the site
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
