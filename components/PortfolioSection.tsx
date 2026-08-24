'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Body, Button, Card, H2, Section } from '@/components/ui';
import { cn } from '@/lib/utils';

type Project = {
  slug: 'plays-ranch' | 'vet-gang' | 'dukeel-transport';
  title: string;
  tagline: string;
  summary: string;
  tech: string;
  tags: string[];
  accent: 'red' | 'green' | 'neutral';
  domain: string;
  imageSrc: string;
  imageAlt: string;
  details: {
    overview: string;
    features: string[];
    links: Array<{ label: string; href: string }>;
  };
};

function ProjectPreview({
  src,
  alt,
  accent,
  priority = false,
}: {
  src: string;
  alt: string;
  accent: Project['accent'];
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        'relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_46%),linear-gradient(180deg,rgba(12,13,18,0.98),rgba(3,4,7,0.98))] p-4 transition duration-300',
        accent === 'green'
          ? 'border-greenglow/20 shadow-[0_0_0_rgba(0,255,136,0)] group-hover:border-greenglow/45 group-hover:shadow-[0_0_36px_rgba(0,255,136,0.18)]'
          : accent === 'red'
            ? 'border-redglow/20 shadow-[0_0_0_rgba(255,43,43,0)] group-hover:border-redglow/45 group-hover:shadow-[0_0_36px_rgba(255,43,43,0.18)]'
            : 'border-white/12 shadow-[0_0_0_rgba(255,255,255,0)] group-hover:border-white/25 group-hover:shadow-[0_0_36px_rgba(176,196,255,0.16)]',
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-contain p-6 drop-shadow-[0_18px_35px_rgba(0,0,0,0.55)] transition duration-300 group-hover:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_38%),linear-gradient(180deg,transparent,rgba(0,0,0,0.34))]" />
    </div>
  );
}

function ProjectGallery({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_44%),linear-gradient(180deg,rgba(12,13,18,0.98),rgba(3,4,7,0.98))] p-5">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-6 drop-shadow-[0_18px_35px_rgba(0,0,0,0.55)]"
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4">
          <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Visual Direction
          </div>
          <div className="mt-2 text-sm leading-6 text-slate-200">
            Premium metallic logo treatment staged inside a dark display frame
            so each brand mark reads clearly at a glance.
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4">
          <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Reference
          </div>
          <div className="mt-2 text-sm leading-6 text-slate-200">
            Portfolio media now uses polished metallic logo compositions instead
            of page-preview placeholders.
          </div>
        </div>
      </div>
    </div>
  );
}

const projects: Project[] = [
  {
    slug: 'plays-ranch',
    title: 'Plays Ranch Programming Corporation LLC',
    tagline: 'Automation systems & scale engineering',
    summary:
      'Premium one-page corporate site with a dark luxury tech look, animated hero staging, and a strategy-call funnel for automation and infrastructure offers.',
    tech: 'HTML/CSS/JS, custom animations, Resend contact form',
    tags: ['Static', 'Corporate', 'Luxury Tech', 'Automation'],
    accent: 'red',
    domain: 'playsranch.com',
    imageSrc: '/images/portfolio/playsranch-metal.svg',
    imageAlt: 'Metallic Plays Ranch Programming logo',
    details: {
      overview:
        'Designed as a sharp one-page authority site, this concept centers on premium positioning, animated story beats, and a clean path into a strategy consultation.',
      features: [
        'Animated hero stage for premium first impression',
        'Automation and infrastructure offer framing',
        'High-contrast contact funnel with Resend integration',
      ],
      links: [
        { label: 'Visit Live Site', href: 'https://playsranch.com' },
        { label: 'Book Similar Build', href: '#design-options' },
      ],
    },
  },
  {
    slug: 'vet-gang',
    title: 'Vet Gang',
    tagline: 'Veteran-owned national movement & verified business network',
    summary:
      'Multi-page Next.js 14 application with a military-inspired dark system, membership application flow, and an optional admin-oriented operational workflow.',
    tech: 'Next.js 14, TypeScript, Tailwind, optional AWS DynamoDB back-end',
    tags: ['Next.js', 'Membership', 'Multi-page', 'Admin'],
    accent: 'green',
    domain: 'vetgang.com',
    imageSrc: '/images/portfolio/vetgang-metal.svg',
    imageAlt: 'Metallic Vet Gang logo',
    details: {
      overview:
        'This portfolio concept is framed as a larger ecosystem build with member-facing routes, brand storytelling, application flows, and admin-capable expansion room.',
      features: [
        'Multi-route experience for movement, network, and partner pages',
        'Membership intake and qualification flow',
        'Optional data layer for admin workflow and approvals',
      ],
      links: [
        { label: 'Visit Live Site', href: 'https://vetgang.com' },
        { label: 'Join Network', href: 'https://vetgang.com/join' },
      ],
    },
  },
  {
    slug: 'dukeel-transport',
    title: 'Dukeel Transportation & Freight',
    tagline:
      'Modern logistics and freight site for a premium government-contractor brand',
    summary:
      'Modern logistics and freight site built with a multi-page structure covering home, services, government contracting, about, and contact, anchored by an animated truck hero and a premium contractor-focused visual system.',
    tech: 'Next.js App Router, TypeScript, Tailwind CSS, Framer Motion',
    tags: ['Next.js', 'Logistics', 'Government', 'Multi-page'],
    accent: 'neutral',
    domain: 'dukeeltransport.com',
    imageSrc: '/images/portfolio/dukeel-metal.svg',
    imageAlt: 'Metallic Dukeel Transportation logo',
    details: {
      overview:
        'Dukeel is positioned as a modern freight and transportation website with a premium government-contractor aesthetic, combining clear operational messaging, multi-page structure, and polished motion-led presentation.',
      features: [
        'Multi-page architecture across home, services, government contracting, about, and contact',
        'Animated truck hero graphic for a stronger first impression',
        'SEO-ready setup with metadata, sitemap, and robots.txt',
      ],
      links: [
        { label: 'Visit Live Site', href: 'https://dukeeltransport.com' },
        { label: 'Compare Options', href: '#design-options' },
      ],
    },
  },
];

function PortfolioModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="portfolio-dialog-title"
        className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-md"
        onClick={onClose}
      >
        <div className="flex min-h-full items-center justify-center p-4 sm:p-8">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-5xl rounded-[2rem] border border-white/10 bg-[#0D0E11]/95 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.55)] sm:p-8"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Featured Project
                </div>
                <h3 id="portfolio-dialog-title" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {project.title}
                </h3>
                <p className="text-base leading-7 text-slate-300">
                  {project.tagline}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <Card
                accent={project.accent}
                className="p-5 sm:p-6"
                hover={false}
              >
                <div className="space-y-5">
                  <div className="rounded-[1.75rem] border border-white/10 bg-black/30 p-4">
                    <div className="mb-4 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-redglow/85" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
                      <span className="h-2.5 w-2.5 rounded-full bg-greenglow/85" />
                    </div>
                    <ProjectGallery
                      src={project.imageSrc}
                      alt={project.imageAlt}
                    />
                  </div>
                  <p className="text-base leading-7 text-slate-300">
                    {project.details.overview}
                  </p>
                </div>
              </Card>

              <div className="space-y-6">
                <Card
                  accent={project.accent}
                  className="p-5 sm:p-6"
                  hover={false}
                >
                  <div className="space-y-4">
                    <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                      Purpose & Stack
                    </div>
                    <p className="text-base leading-7 text-slate-300">
                      {project.summary}
                    </p>
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                      {project.tech}
                    </p>
                  </div>
                </Card>

                <Card
                  accent={project.accent}
                  className="p-5 sm:p-6"
                  hover={false}
                >
                  <div className="space-y-4">
                    <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                      Highlights
                    </div>
                    <div className="grid gap-3">
                      {project.details.features.map((feature) => (
                        <div
                          key={feature}
                          className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-base leading-7 text-slate-200"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                <div className="flex flex-wrap gap-3">
                  {project.details.links.map((link, index) => {
                    const isExternal = link.href.startsWith('http');

                    return (
                      <Button
                        key={link.label}
                        href={link.href}
                        glow={index === 0 ? 'gradient' : 'green'}
                        variant={index === 0 ? 'primary' : 'outline'}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noreferrer' : undefined}
                      >
                        {link.label}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function PortfolioSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <Section id="portfolio" className="relative bg-background pt-8">
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl space-y-5"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
              Portfolio
            </div>
            <H2 className="text-3xl sm:text-4xl lg:text-5xl">
              High-trust builds presented in a darker, sharper visual system.
            </H2>
            <Body className="max-w-2xl">
              A selection of project directions across corporate, membership,
              and logistics work, presented with hover detail and a deeper modal
              view.
            </Body>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                role="button"
                tabIndex={0}
                onClick={() => setActiveProject(project)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setActiveProject(project);
                  }
                }}
                className="group text-left"
              >
                <Card
                  accent={project.accent}
                  className="h-full overflow-hidden p-0"
                >
                  <div className="relative">
                    <div className="overflow-hidden border-b border-white/10 p-4">
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={cn(
                          'rounded-[1.6rem] border bg-black/30 p-4 transition duration-300',
                          project.accent === 'green'
                            ? 'border-greenglow/15 group-hover:border-greenglow/35'
                            : project.accent === 'red'
                              ? 'border-redglow/15 group-hover:border-redglow/35'
                              : 'border-white/10 group-hover:border-white/20',
                        )}
                      >
                        <div className="mb-4 flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-redglow/85" />
                          <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
                          <span className="h-2.5 w-2.5 rounded-full bg-greenglow/85" />
                        </div>
                        <ProjectPreview
                          src={project.imageSrc}
                          alt={project.imageAlt}
                          accent={project.accent}
                          priority={index === 0}
                        />
                      </motion.div>
                    </div>

                    <div className="space-y-4 p-6">
                      <div>
                        <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                          {project.tagline}
                        </div>
                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-base leading-7 text-slate-300">
                        {project.summary}
                      </p>

                      <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                        {project.tech}
                      </p>

                      <a
                        href={`https://${project.domain}`}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 underline decoration-white/15 underline-offset-4 transition hover:text-white"
                      >
                        {project.domain}
                      </a>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
                      <div className="w-full p-6">
                        <div className="rounded-[1.4rem] border border-white/10 bg-black/45 px-4 py-4 backdrop-blur">
                          <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                            More Details
                          </div>
                          <div className="mt-2 text-sm leading-6 text-slate-200">
                            Open project view for more screenshots, features,
                            and launch links.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <AnimatePresence>
        {activeProject ? (
          <PortfolioModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
