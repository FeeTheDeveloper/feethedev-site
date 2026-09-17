'use client';

import { motion } from 'framer-motion';
import { Body, Button, H2, Section } from '@/components/ui';
import {
  GitHubIcon,
  VSCodeIcon,
  ReactIcon,
  FigmaIcon,
  OpenAIIcon,
  AWSIcon,
  DockerIcon,
  PostgreSQLIcon,
} from '@/components/icons/DevToolIcons';

const floatingTools = [
  { label: 'GitHub', Icon: GitHubIcon, className: 'left-[3%] top-[10%]', size: 'h-11 w-11', duration: 5.2, delay: 0 },
  { label: 'Figma', Icon: FigmaIcon, className: 'left-[12%] top-[62%]', size: 'h-14 w-14', duration: 6.4, delay: 0.4 },
  { label: 'VS Code', Icon: VSCodeIcon, className: 'left-[22%] top-[30%]', size: 'h-9 w-9', duration: 4.6, delay: 0.8 },
  { label: 'ChatGPT', Icon: OpenAIIcon, className: 'right-[6%] top-[14%]', size: 'h-12 w-12', duration: 5.8, delay: 0.2 },
  { label: 'React', Icon: ReactIcon, className: 'right-[16%] top-[58%]', size: 'h-10 w-10', duration: 5, delay: 1.1 },
  { label: 'AWS', Icon: AWSIcon, className: 'right-[28%] top-[24%]', size: 'h-9 w-9', duration: 6.1, delay: 0.6 },
  { label: 'Docker', Icon: DockerIcon, className: 'left-[46%] top-[8%]', size: 'h-9 w-9', duration: 5.5, delay: 1.4 },
  { label: 'PostgreSQL', Icon: PostgreSQLIcon, className: 'right-[42%] top-[70%]', size: 'h-10 w-10', duration: 6.6, delay: 0.3 },
];

const pillars = [
  {
    title: 'Custom-Scoped Builds',
    detail: 'Priced to the actual problem in front of us, not squeezed into a rigid tier.',
  },
  {
    title: 'Direct To The Builder',
    detail: 'No account managers, no hand-offs between departments. You talk to who builds it.',
  },
  {
    title: 'Dev + Creative, One Person',
    detail: 'Engineering and design decisions made by the same person, in the same sitting.',
  },
];

export function OwnerSection() {
  return (
    <Section id="build" className="relative overflow-hidden bg-black/30">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
      >
        {floatingTools.map(({ label, Icon, className, size, duration, delay }) => (
          <motion.div
            key={label}
            className={`absolute ${className}`}
            animate={{ y: [0, -16, 0], rotate: [0, 3, 0] }}
            transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div
              className={`flex ${size} items-center justify-center rounded-2xl border border-white/10 bg-[#080d15]/80 p-2 shadow-[0_14px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl`}
            >
              <Icon className="h-full w-full text-white/90" />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-3xl space-y-8 rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-10 text-center shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:px-10 sm:py-12"
      >
        <div className="inline-flex items-center gap-3 rounded-full border border-electric/30 bg-electric/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-200">
          <span className="h-2 w-2 rounded-full bg-electric shadow-[0_0_18px_rgba(37,120,255,0.85)]" />
          Owner-Operated &bull; Dev + Creative
        </div>

        <div className="space-y-4">
          <H2 className="text-3xl sm:text-4xl lg:text-5xl">
            One builder. Two worlds. No agency markup.
          </H2>
          <Body className="mx-auto max-w-2xl">
            I own this business, so I am the one writing the code and making the
            creative calls &mdash; not a rotating account team pricing you against
            a template. That means faster decisions, fewer hands in the project,
            and the room to shape a service around what your business actually
            needs at a rate a bigger shop cannot match.
          </Body>
        </div>

        <div className="grid gap-4 text-left sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-white/10 bg-black/25 p-5"
            >
              <div className="text-sm font-semibold text-white">
                {pillar.title}
              </div>
              <div className="mt-2 text-xs leading-6 text-slate-400">
                {pillar.detail}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button href="/start" glow="gradient">
            Scope My Build
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
