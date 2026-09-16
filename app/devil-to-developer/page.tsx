import Link from 'next/link';

const flips = [
  ['Scam pages', 'Conversion-focused landing pages and legitimate e-commerce'],
  ['Account takeovers', 'Identity, authentication, OAuth, and access control'],
  ['Bot abuse', 'APIs, automation, agents, and workflow engineering'],
  ['Payment fraud', 'Payments infrastructure, fraud prevention, and Stripe integrations'],
  ['Hiding activity', 'Documentation, compliance, invoicing, and business operations'],
  ['Unauthorized hacking', 'Ethical security labs, defensive security, and CTF practice'],
];

export default function DevilToDeveloperPage() {
  return (
    <main className="min-h-screen overflow-hidden px-6 py-20 text-white sm:px-8 lg:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 inline-flex rounded-full border border-blueglow/30 bg-blueglow/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyanlight">
          Fee The Developer Initiative
        </div>
        <h1 className="max-w-5xl text-5xl font-extrabold uppercase leading-[0.88] sm:text-7xl lg:text-8xl">
          Devil To <span className="ftd-gradient-text">Developer</span>
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-300">
          Same hustle. Better code. We redirect high-speed problem solving, resourcefulness, and survival instincts into software, automation, ethical security, digital business, credentials, and legitimate income.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/apprenticeship" className="rounded-2xl bg-white px-6 py-3 font-bold text-black transition hover:-translate-y-1">Join the Apprenticeship</Link>
          <a href="https://github.com/FeeTheDeveloper" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10">See the GitHub Proof</a>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {flips.map(([from, to]) => (
            <article key={from} className="neon-border rounded-3xl border border-white/10 bg-black/45 p-6 backdrop-blur-xl">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-redglow">Flip the skill</div>
              <h2 className="mt-3 text-2xl font-bold text-white">{from}</h2>
              <div className="my-4 h-px bg-gradient-to-r from-redglow/70 via-blueglow/70 to-greenglow/70" />
              <p className="leading-7 text-slate-300">{to}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl sm:p-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-greenglow">Proof over talk</div>
            <h2 className="mt-4 text-4xl font-bold">Build in public. Verify the work.</h2>
          </div>
          <div className="space-y-4 text-lg leading-8 text-slate-300">
            <p>Projects are backed by repositories, commits, pull requests, deployments, certificates, client systems, and documented case studies.</p>
            <p>Content stays lawful: illegal activity is discussed only at a high level, while the actual walkthrough teaches the safe, legal technical alternative.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
