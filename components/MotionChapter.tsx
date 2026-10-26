import { PresentationJourney } from '@/components/PresentationJourney';
import { Section } from '@/components/ui';

const statement =
  'A strong digital presence makes it easy for customers to understand your business, trust it, and take the next step.';

const capabilities = [
  'Web design',
  'Custom software',
  'AI automation',
  'Google Workspace',
  'Business presence',
  'Operational systems',
];

export function MotionChapter() {
  return (
    <Section
      id="motion-system"
      data-motion-section
      className="relative border-y border-white/10 bg-[#060910] py-28 sm:py-36 lg:py-44"
      containerClassName="max-w-[88rem]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(37,120,255,0.14),transparent_31%),radial-gradient(circle_at_82%_72%,rgba(20,232,180,0.09),transparent_27%)]" />

      <div className="relative">
        <p
          data-motion-reveal
          className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan"
        >
          Connected by design
        </p>
        <p
          data-motion-statement
          className="mt-8 max-w-6xl text-balance text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-7xl"
        >
          {statement.split(' ').map((word, index) => (
            <span
              key={`${word}-${index}`}
              data-motion-word
              className="mr-[0.23em] inline-block"
            >
              {word}
            </span>
          ))}
        </p>

        <h2 className="mt-12 text-3xl font-semibold text-white sm:text-4xl">
          Build your digital presence in three steps.
        </h2>
        <PresentationJourney />
        <div
          data-motion-reveal
          className="mt-10 overflow-hidden border-y border-white/10 py-5"
          aria-label="Fee The Developer capabilities"
        >
          <div className="motion-marquee flex w-max items-center gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.26em] text-slate-400">
            {[...capabilities, ...capabilities].map((capability, index) => (
              <span
                key={`${capability}-${index}`}
                className="flex items-center gap-10"
              >
                {capability}
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_12px_rgba(34,211,238,0.75)]"
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
