import { PresentationJourney } from '@/components/PresentationJourney';
import { Section } from '@/components/ui';

const statement =
  'A premium digital presence should feel connected before anyone has to ask how the system works.';

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
          Three layers. One direction.
        </h2>
        <PresentationJourney />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <article
            data-motion-reveal
            className="rounded-[2rem] bg-white/[0.055] p-1.5 ring-1 ring-white/10"
          >
            <div className="flex h-full min-h-56 flex-col justify-between rounded-[calc(2rem-0.375rem)] bg-[radial-gradient(circle_at_78%_18%,rgba(37,120,255,0.2),transparent_42%),#0B1018] p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] sm:p-8">
              <div className="h-2 w-2 rounded-full bg-electric shadow-[0_0_18px_rgba(37,120,255,0.9)]" />
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Motion with a job
                </h3>
                <p className="mt-3 max-w-sm leading-7 text-slate-300">
                  Movement guides attention, clarifies hierarchy, and then gets
                  out of the way.
                </p>
              </div>
            </div>
          </article>

          <article
            data-motion-reveal
            className="rounded-[2rem] bg-white/[0.055] p-1.5 ring-1 ring-white/10"
          >
            <div className="flex h-full min-h-56 flex-col justify-between rounded-[calc(2rem-0.375rem)] bg-[radial-gradient(circle_at_20%_15%,rgba(20,232,180,0.15),transparent_45%),#0B1018] p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] sm:p-8">
              <div className="h-2 w-2 rounded-full bg-greenglow shadow-[0_0_18px_rgba(20,232,180,0.9)]" />
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Quiet by default
                </h3>
                <p className="mt-3 max-w-sm leading-7 text-slate-300">
                  Reduced-motion preferences are honored, and the ElevenLabs
                  sound layer starts only when a visitor asks for it.
                </p>
              </div>
            </div>
          </article>
        </div>

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
