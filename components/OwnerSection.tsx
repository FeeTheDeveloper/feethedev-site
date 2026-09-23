'use client';

import Image from 'next/image';
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
  {
    label: 'GitHub',
    Icon: GitHubIcon,
    className: 'left-[3%] top-[10%]',
    size: 'h-11 w-11',
    duration: 5.2,
    delay: 0,
  },
  {
    label: 'Figma',
    Icon: FigmaIcon,
    className: 'left-[12%] top-[62%]',
    size: 'h-14 w-14',
    duration: 6.4,
    delay: 0.4,
  },
  {
    label: 'VS Code',
    Icon: VSCodeIcon,
    className: 'left-[22%] top-[30%]',
    size: 'h-9 w-9',
    duration: 4.6,
    delay: 0.8,
  },
  {
    label: 'ChatGPT',
    Icon: OpenAIIcon,
    className: 'right-[6%] top-[14%]',
    size: 'h-12 w-12',
    duration: 5.8,
    delay: 0.2,
  },
  {
    label: 'React',
    Icon: ReactIcon,
    className: 'right-[16%] top-[58%]',
    size: 'h-10 w-10',
    duration: 5,
    delay: 1.1,
  },
  {
    label: 'AWS',
    Icon: AWSIcon,
    className: 'right-[28%] top-[24%]',
    size: 'h-9 w-9',
    duration: 6.1,
    delay: 0.6,
  },
  {
    label: 'Docker',
    Icon: DockerIcon,
    className: 'left-[46%] top-[8%]',
    size: 'h-9 w-9',
    duration: 5.5,
    delay: 1.4,
  },
  {
    label: 'PostgreSQL',
    Icon: PostgreSQLIcon,
    className: 'right-[42%] top-[70%]',
    size: 'h-10 w-10',
    duration: 6.6,
    delay: 0.3,
  },
];

const pillars = [
  {
    title: 'Veteran-led',
    detail:
      'A U.S. Army veteran bringing ownership, discipline, and direct accountability to every build.',
  },
  {
    title: 'Full-stack execution',
    detail:
      'Product design, implementation, data integration, deployment, and documentation under one roof.',
  },
  {
    title: 'Systems thinking',
    detail:
      'Web applications and AI-assisted workflows designed around how a business actually operates.',
  },
];

export function OwnerSection() {
  return (
    <Section id="build" className="relative overflow-hidden bg-black/30">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
      >
        {floatingTools.map(
          ({ label, Icon, className, size, duration, delay }) => (
            <motion.div
              key={label}
              className={`absolute ${className}`}
              animate={{ y: [0, -16, 0], rotate: [0, 3, 0] }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div
                className={`flex ${size} items-center justify-center rounded-2xl border border-white/10 bg-[#080d15]/80 p-2 shadow-[0_14px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl`}
              >
                <Icon className="h-full w-full text-white/90" />
              </div>
            </motion.div>
          ),
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-8 lg:p-10"
      >
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2.25rem] bg-gradient-to-br from-electric/35 via-transparent to-greenglow/30 blur-2xl" />
            <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#070a10] shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
              <Image
                src="/brand/alfreddie-postell-founder.jpg"
                alt="Alfreddie Postell II, founder of Fee The Developer"
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover contrast-[1.06] saturate-[0.92]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-electric/10" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(20,232,180,0.045)_50%)] bg-[length:100%_6px]" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/65 px-4 py-3 backdrop-blur-xl">
                <div className="text-xs uppercase tracking-[0.22em] text-greenglow">
                  Founder profile
                </div>
                <div className="mt-1 font-semibold text-white">
                  Alfreddie Postell II
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-electric/30 bg-electric/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-200">
              <span className="h-2 w-2 rounded-full bg-electric shadow-[0_0_18px_rgba(37,120,255,0.85)]" />
              Who is Fee The Developer?
            </div>

            <div className="mt-6 space-y-4">
              <H2 className="text-3xl sm:text-4xl lg:text-5xl">
                The builder behind the business.
              </H2>
              <Body>
                Fee The Developer is Alfreddie Postell II, a U.S. Army veteran,
                full-stack developer, and AI systems builder based in McKinney,
                Texas.
              </Body>
              <Body className="text-base text-slate-400 sm:text-lg">
                He builds web applications, AI-assisted workflows, and business
                operating systems across business services, sports intelligence,
                and commerce. Clients work directly with the person designing,
                coding, connecting, deploying, and documenting their system.
              </Body>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
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

            <div className="mt-8">
              <Button href="/start" glow="gradient">
                Work With Alfreddie
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
