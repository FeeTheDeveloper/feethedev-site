import type { ReactNode } from 'react';
import { Body, H1, Section } from '@/components/ui';

export function PageIntro({
  eyebrow,
  title,
  description,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  aside?: ReactNode;
}) {
  return (
    <Section className="relative overflow-hidden border-b border-white/10 py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute left-[-8rem] top-0 h-64 w-64 rounded-full bg-electric/20 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-7rem] top-12 h-56 w-56 rounded-full bg-greenglow/10 blur-[100px]"
      />
      <div className="relative grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
        <div className="max-w-4xl space-y-5">
          <p className="status-chip">{eyebrow}</p>
          <H1 className="text-4xl sm:text-6xl lg:text-7xl">{title}</H1>
          <Body className="max-w-2xl text-slate-300">{description}</Body>
        </div>
        {aside && <div>{aside}</div>}
      </div>
    </Section>
  );
}
