import Link from 'next/link';

const stages = [
  ['01', 'Foundation', 'Git, GitHub, HTML/CSS, JavaScript, Python fundamentals, command line, VS Code, AI-assisted development, and documentation.'],
  ['02', 'Real Development', 'React, Next.js, APIs, databases, Supabase, deployment, testing, debugging, and production habits.'],
  ['03', 'Business Systems', 'Google Workspace, Stripe, authentication, CRM/workflows, automation, business websites, and integrations.'],
  ['04', 'Production Work', 'Controlled contributions to real Fee The Developer projects through documentation, QA, bug fixes, components, API testing, and internal tools.'],
  ['05', 'Portfolio Graduation', 'GitHub contribution history, deployed projects, case studies, certificates, code reviews, and performance-based references.'],
];

export default function ApprenticeshipPage() {
  return (
    <main className="min-h-screen px-6 py-20 text-white sm:px-8 lg:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="inline-flex rounded-full border border-greenglow/30 bg-greenglow/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-greenglow">
          Junior Developer Apprenticeship
        </div>
        <h1 className="mt-8 max-w-5xl text-5xl font-extrabold uppercase leading-[0.9] sm:text-7xl lg:text-8xl">
          Learn. Build. <span className="ftd-gradient-text">Ship.</span>
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-300">
          A portfolio-first apprenticeship that converts technical learning into visible proof: repositories, deployments, reviews, certifications, and controlled real-world project experience.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="mailto:contact@feethedeveloper.com?subject=Junior%20Developer%20Apprenticeship" className="rounded-2xl bg-white px-6 py-3 font-bold text-black transition hover:-translate-y-1">Apply / Request Intake</a>
          <Link href="/devil-to-developer" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10">See Devil To Developer</Link>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="space-y-5">
          {stages.map(([number, title, description]) => (
            <article key={number} className="grid gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:grid-cols-[90px_1fr] md:items-start">
              <div className="text-4xl font-extrabold text-blueglow">{number}</div>
              <div>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="mt-3 max-w-4xl leading-7 text-slate-300">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl grid gap-6 lg:grid-cols-3">
        {[
          ['GitHub Proof', 'Contribution history, pull requests, commits, issue work, documentation, and portfolio repositories.'],
          ['Credential Path', 'Coursera and approved technical certifications mapped to practical projects instead of certificate collecting.'],
          ['Career + Business', 'Preparation for junior roles, freelance work, client delivery, or entrepreneurship through the broader Fee The Developer and Hutchrok ecosystem.'],
        ].map(([title, description]) => (
          <div key={title} className="neon-border rounded-3xl border border-white/10 bg-black/45 p-7">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="mt-4 leading-7 text-slate-300">{description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
