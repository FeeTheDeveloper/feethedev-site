import Link from 'next/link';
import { Body, H2, Section } from '@/components/ui';

const programs = [
  {
    href: '/devil-to-developer',
    eyebrow: 'Fee The Developer Initiative',
    title: 'Devil To Developer',
    description: 'Same hustle. Better code. Redirecting street-level problem solving into software, automation, and legitimate business.',
    cta: 'See the Program',
  },
  {
    href: '/apprenticeship',
    eyebrow: 'Talent Pipeline',
    title: 'Junior Developer Apprenticeship',
    description: 'A portfolio-first apprenticeship that converts learning into proof: repositories, deployments, and reviewed production work.',
    cta: 'See the Program',
  },
];

export function ProgramsTeaserSection() {
  return (
    <Section id="programs" className="relative bg-black/30">
      <div className="max-w-3xl space-y-5">
        <div className="inline-flex rounded-full border border-greenglow/25 bg-greenglow/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-greenglow">
          Beyond Client Work
        </div>
        <H2 className="text-3xl sm:text-4xl lg:text-5xl">We build people, not just software.</H2>
        <Body className="max-w-2xl text-slate-300">
          Fee The Developer runs two ongoing programs that turn potential into credentialed, employable
          technical skill.
        </Body>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {programs.map((program) => (
          <Link
            key={program.href}
            href={program.href}
            className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.06]"
          >
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{program.eyebrow}</div>
            <h3 className="mt-3 text-2xl font-bold text-white">{program.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{program.description}</p>
            <div className="mt-5 inline-flex items-center gap-2 font-bold text-white">
              {program.cta}
              <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
