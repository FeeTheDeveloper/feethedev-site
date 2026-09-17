'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button, Body, H1, Section } from '@/components/ui';
import { siteConfig } from '@/lib/site-config';
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

const devTools = [
  { label: 'GitHub', Icon: GitHubIcon, className: 'left-[-2%] top-[8%]', delay: 0 },
  { label: 'VS Code', Icon: VSCodeIcon, className: 'left-[-6%] top-[32%]', delay: 0.15 },
  { label: 'React', Icon: ReactIcon, className: 'left-[-4%] bottom-[30%]', delay: 0.3 },
  { label: 'Figma', Icon: FigmaIcon, className: 'left-[0%] bottom-[6%]', delay: 0.45 },
  { label: 'ChatGPT', Icon: OpenAIIcon, className: 'right-[-2%] top-[6%]', delay: 0.6 },
  { label: 'AWS', Icon: AWSIcon, className: 'right-[-6%] top-[30%]', delay: 0.75 },
  { label: 'Docker', Icon: DockerIcon, className: 'right-[-4%] bottom-[28%]', delay: 0.9 },
  { label: 'PostgreSQL', Icon: PostgreSQLIcon, className: 'right-[0%] bottom-[4%]', delay: 1.05 },
];

export function Hero() {
  return (
    <Section className="relative flex min-h-screen items-center overflow-hidden bg-transparent py-0">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/brand/ftd-background-drop.webp"
          alt=""
          fill
          aria-hidden
          sizes="100vw"
          className="object-cover opacity-25 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute left-[-10rem] top-16 h-80 w-80 rounded-full bg-electric/20 blur-[110px]" />
        <div className="absolute right-[-8rem] top-20 h-72 w-72 rounded-full bg-greenglow/15 blur-[100px]" />
        <div className="absolute bottom-[-7rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-redglow/10 blur-[110px]" />
      </div>

      <div className="grid min-h-screen items-center gap-12 py-20 lg:grid-cols-[0.94fr_1.06fr] lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 space-y-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-electric/30 bg-electric/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-200 shadow-electric backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-greenglow shadow-[0_0_18px_rgba(20,232,180,0.95)]" />
            Veteran-Owned • Web • AI • Business Presence
          </div>

          <div className="space-y-5">
            <div className="text-sm font-semibold uppercase tracking-[0.36em] text-cyan">
              {siteConfig.name}
            </div>
            <H1 className="max-w-5xl text-balance text-5xl leading-[0.9] sm:text-6xl lg:text-7xl xl:text-8xl">
              BUILD. <span className="ftd-gradient-text">AUTOMATE.</span> CREATE. SCALE.
            </H1>
            <Body className="max-w-2xl text-lg text-slate-300 sm:text-xl">
              We design the site, wire the systems, strengthen the digital presence,
              and connect the business to the tools that make it move.
            </Body>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button href="/start" glow="gradient">
              Build My Business
            </Button>
            <Button href="#build">See My Approach</Button>
          </div>

          <div className="grid gap-3 pt-2 sm:grid-cols-3">
            {[
              ['Web + Software', 'Design, apps, systems'],
              ['Google + Apple + Yelp', 'Presence + verification support'],
              ['Hutchrok Partnership', 'Full business solutions'],
            ].map(([title, desc], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.08 }}
                whileHover={{ y: -4, scale: 1.015 }}
                className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-4 backdrop-blur-xl"
              >
                <div className="text-sm font-semibold text-white">{title}</div>
                <div className="mt-1 text-xs leading-5 text-slate-400">{desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: 1.5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[720px]"
        >
          <div className="pointer-events-none absolute inset-0 scale-90 rounded-full border border-electric/25 shadow-electric" />
          <div className="pointer-events-none absolute inset-[8%] rounded-full border border-greenglow/15" />
          <div className="pointer-events-none absolute inset-[17%] rounded-full border border-redglow/10" />

          {devTools.map(({ label, Icon, className, delay }) => (
            <motion.div
              key={label}
              className={`absolute z-20 ${className}`}
              animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 4.5, delay, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div
                title={label}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#080d15]/90 p-2.5 shadow-[0_14px_40px_rgba(0,0,0,.45)] backdrop-blur-xl sm:h-14 sm:w-14"
              >
                <Icon className="h-full w-full text-white" />
              </div>
            </motion.div>
          ))}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="neon-border relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_28px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-4"
          >
            <div className="relative aspect-square overflow-hidden rounded-[1.6rem] bg-[#05070b]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(37,120,255,.2),transparent_35%)]" />
              <Image
                src="/brand/ftd-founder-hero.webp"
                alt="Illustrated portrait of Fee The Developer in a white hoodie against a blue developer workspace"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="hidden sm:absolute sm:inset-x-6 sm:bottom-6 sm:block sm:rounded-2xl sm:border sm:border-white/10 sm:bg-black/70 sm:p-5 sm:backdrop-blur-xl">
                <div className="flex flex-wrap items-center gap-2 text-[0.55rem] uppercase tracking-[0.2em] text-cyan sm:text-[0.65rem] sm:tracking-[0.25em]">
                  <span>Direct Partnership</span>
                  <span className="h-1 w-1 rounded-full bg-greenglow" />
                  <span>Full Business Systems</span>
                </div>
                <div className="mt-1.5 flex items-center gap-2 sm:mt-2 sm:gap-3">
                  <span className="text-sm font-semibold text-white sm:text-lg sm:text-xl">
                    Fee The Developer
                  </span>
                  <span className="text-sm font-semibold text-slate-500 sm:text-lg sm:text-xl">×</span>
                  <span className="relative h-5 w-16 shrink-0 overflow-hidden rounded-md bg-white p-0.5 sm:h-7 sm:w-24 sm:rounded-lg sm:p-1">
                    <Image
                      src="/brand/hutchrok-logo.png"
                      alt="Hutchrok Solutions Group"
                      fill
                      sizes="96px"
                      className="object-contain"
                    />
                  </span>
                </div>
                <div className="mt-1.5 hidden text-sm leading-6 text-slate-300 sm:mt-2 sm:block">
                  Technology execution backed by complete business infrastructure.
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
