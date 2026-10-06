'use client';

import { useRef, type ReactNode } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function PremiumMotionExperience({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = scope.current;

      if (!root) return;

      const mediaQuery = gsap.matchMedia();

      mediaQuery.add('(prefers-reduced-motion: no-preference)', () => {
        gsap
          .timeline({ defaults: { ease: 'power4.out' } })
          .from('[data-motion-hero-line]', {
            yPercent: 112,
            opacity: 0,
            duration: 1.15,
            stagger: 0.12,
          })
          .from(
            '[data-motion-hero-support]',
            {
              y: 28,
              opacity: 0,
              duration: 0.85,
              stagger: 0.08,
            },
            '-=0.68',
          )
          .from(
            '[data-motion-hero-stage]',
            {
              scale: 0.9,
              y: 48,
              opacity: 0,
              duration: 1.15,
            },
            '-=0.65',
          );

        gsap.to('[data-motion-progress]', {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.25,
          },
        });

        gsap.utils.toArray<HTMLElement>('section').forEach((section) => {
          const reveals = section.querySelectorAll<HTMLElement>(
            '[data-motion-reveal]',
          );

          if (!reveals.length) return;

          gsap.from(reveals, {
            y: 56,
            opacity: 0,
            duration: 0.95,
            stagger: 0.09,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 76%',
              once: true,
            },
          });
        });

        const statement = root.querySelector('[data-motion-statement]');
        const words = gsap.utils.toArray<HTMLElement>('[data-motion-word]');

        if (statement && words.length) {
          gsap.fromTo(
            words,
            { opacity: 0.14 },
            {
              opacity: 1,
              stagger: 0.045,
              ease: 'none',
              scrollTrigger: {
                trigger: statement,
                start: 'top 76%',
                end: 'bottom 48%',
                scrub: 0.7,
              },
            },
          );
        }

        gsap.utils
          .toArray<HTMLElement>(
            '[data-motion-media], .signal-artwork__frame, .showcase-artifact',
          )
          .forEach((media) => {
            gsap.fromTo(
              media,
              { scale: 0.88, opacity: 0.48 },
              {
                scale: 1,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                  trigger: media,
                  start: 'top 88%',
                  end: 'center 54%',
                  scrub: 0.65,
                },
              },
            );

            gsap.to(media, {
              scale: 0.97,
              opacity: 0.35,
              ease: 'none',
              scrollTrigger: {
                trigger: media,
                start: 'bottom 42%',
                end: 'bottom top',
                scrub: 0.65,
              },
            });
          });

        gsap.utils
          .toArray<HTMLElement>('[data-motion-orbit]')
          .forEach((item, index) => {
            gsap.to(item, {
              y: index % 2 === 0 ? -12 : 12,
              rotate: index % 2 === 0 ? 2 : -2,
              duration: 2.8 + index * 0.18,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            });
          });
      });

      mediaQuery.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(
          '[data-motion-hero-line], [data-motion-hero-support], [data-motion-hero-stage], [data-motion-reveal], [data-motion-word], [data-motion-media], [data-motion-orbit]',
          { clearProps: 'all' },
        );
        gsap.set('[data-motion-progress]', { scaleY: 1 });
      });

      return () => mediaQuery.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className="premium-motion relative overflow-x-clip">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-8 left-5 top-28 z-40 hidden w-px overflow-hidden bg-white/10 xl:block"
      >
        <span
          data-motion-progress
          className="block h-full origin-top scale-y-0 bg-gradient-to-b from-electric via-cyan to-greenglow shadow-[0_0_18px_rgba(34,211,238,0.75)]"
        />
      </div>
      {children}
    </div>
  );
}
