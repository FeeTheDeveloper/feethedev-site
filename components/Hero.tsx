'use client';

import Image from 'next/image';
import { Button, Body, H1, Section } from '@/components/ui';
import { siteConfig } from '@/lib/site-config';
import { SoundscapeToggle } from '@/components/SoundscapeToggle';
import { Tilt3D } from '@/components/Tilt3D';
import { SignalFieldLayer } from '@/components/three/SignalFieldLayer';
import {
  AWSIcon,
  DockerIcon,
  FigmaIcon,
  GitHubIcon,
  OpenAIIcon,
  ReactIcon,
} from '@/components/icons/DevToolIcons';

const devTools = [
  {
    label: 'GitHub',
    Icon: GitHubIcon,
    className: 'left-[3%] top-[9%]',
  },
  {
    label: 'Figma',
    Icon: FigmaIcon,
    className: 'left-[1%] bottom-[15%]',
  },
  {
    label: 'React',
    Icon: ReactIcon,
    className: 'left-[19%] bottom-[2%]',
  },
  {
    label: 'OpenAI',
    Icon: OpenAIIcon,
    className: 'right-[3%] top-[9%]',
  },
  {
    label: 'AWS',
    Icon: AWSIcon,
    className: 'right-[1%] bottom-[15%]',
  },
  {
    label: 'Docker',
    Icon: DockerIcon,
    className: 'right-[19%] bottom-[2%]',
  },
];

export function Hero() {
  return (
    <Section
      className="relative flex min-h-[calc(100dvh-5rem)] items-center overflow-hidden bg-transparent py-20 sm:py-24 lg:py-28"
      containerClassName="max-w-[96rem]"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/brand/ftd-background-drop.webp"
          alt=""
          fill
          aria-hidden="true"
          priority
          sizes="100vw"
          className="object-cover opacity-25 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(37,120,255,0.2),transparent_34%),linear-gradient(180deg,rgba(5,7,11,0.6),#05070b_78%)]" />
        <SignalFieldLayer className="signal-field-mask absolute inset-x-0 top-0 h-[100svh] min-h-[38rem]" />
        <div className="absolute left-[-9rem] top-24 h-80 w-80 rounded-full bg-electric/15 blur-[110px]" />
        <div className="absolute right-[-8rem] top-32 h-72 w-72 rounded-full bg-greenglow/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full flex-col items-center text-center">
        <p
          data-motion-hero-support
          className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan sm:text-sm"
        >
          {siteConfig.name}
        </p>

        <H1
          aria-label="Build. Automate. Create. Scale."
          className="mt-7 w-full max-w-6xl text-[clamp(1.8rem,8.9vw,7.5rem)] font-extrabold leading-[0.84] tracking-[-0.055em]"
        >
          <span className="block overflow-hidden pb-[0.08em]">
            <span data-motion-hero-line className="block whitespace-nowrap">
              BUILD. AUTOMATE.
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <span
              data-motion-hero-line
              className="ftd-gradient-text block whitespace-nowrap"
            >
              CREATE. SCALE.
            </span>
          </span>
        </H1>

        <Body
          data-motion-hero-support
          className="mt-7 max-w-2xl text-balance text-base leading-7 text-slate-300 sm:text-xl sm:leading-8"
        >
          We design the site, wire the systems, strengthen the digital presence,
          and connect the business to the tools that make it move.
        </Body>

        <div
          data-motion-hero-support
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button href="/start" glow="gradient">
            Build my business
          </Button>
          <Button href="#motion-system" variant="outline" glow="green">
            See the system
          </Button>
        </div>

        <div data-motion-hero-support className="mt-6">
          <SoundscapeToggle />
        </div>

        <div
          data-motion-hero-stage
          className="relative mt-14 w-full max-w-6xl sm:mt-16"
        >
          <Tilt3D max={3.5} className="rounded-[2rem] sm:rounded-[2.5rem]">
            <div className="rounded-[2rem] bg-white/[0.055] p-1.5 ring-1 ring-white/10 sm:rounded-[2.5rem] sm:p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-0.375rem)] bg-panel shadow-[inset_0_1px_1px_rgba(255,255,255,0.13),0_36px_140px_rgba(0,0,0,0.58)] sm:aspect-[16/9] sm:rounded-[calc(2.5rem-0.5rem)]">
                <Image
                  src="/brand/ftd-founder-hero.webp"
                  alt="Illustrated portrait of Fee The Developer in a white hoodie against a blue developer workspace"
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1152px"
                  className="object-cover object-center sm:object-[center_38%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,11,0.08)_35%,rgba(5,7,11,0.94)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-3 p-6 text-left sm:flex-row sm:items-end sm:justify-between sm:p-9">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-greenglow">
                      Web · AI · automation · presence
                    </p>
                    <p className="mt-3 max-w-xl text-2xl font-semibold leading-tight text-white sm:text-4xl">
                      From first impression to working system.
                    </p>
                  </div>
                  <p className="max-w-xs text-sm leading-6 text-slate-300 sm:text-right">
                    Technology execution with a complete digital business
                    presence.
                  </p>
                </div>
              </div>
            </div>
          </Tilt3D>

          {devTools.map(({ label, Icon, className }) => (
            <div
              key={label}
              data-motion-orbit
              aria-hidden="true"
              className={`bg-[#080d15]/92 absolute z-20 hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/10 p-2.5 shadow-[0_16px_45px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:flex lg:h-14 lg:w-14 ${className}`}
            >
              <Icon className="h-full w-full text-white" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
