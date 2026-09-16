import { Body, Button, H2, Section } from '@/components/ui';
import { githubProfileUrl, socialLinks } from '@/lib/social-links';

const proofPoints = [
  ['Repositories', 'Public repositories, commits, and pull requests instead of claims.'],
  ['Live Deployments', 'Production systems you can visit, not just screenshots.'],
  ['Verified Credentials', 'Certifications with working verification links.'],
];

export function GitHubProofSection() {
  return (
    <Section id="proof" className="relative bg-background">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-5">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
            Proof Over Talk
          </div>
          <H2 className="text-3xl sm:text-4xl lg:text-5xl">Build in public. Verify the work.</H2>
          <Body className="max-w-xl text-slate-300">
            Every claim on this site is backed by something you can check: repositories, deployments,
            certifications, and documented case studies.
          </Body>
          <div className="flex flex-wrap gap-3">
            <Button href={githubProfileUrl}>View GitHub Proof</Button>
            {socialLinks
              .filter((link) => link.label !== 'GitHub')
              .map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
          </div>
        </div>
        <div className="grid gap-4">
          {proofPoints.map(([title, description]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="font-bold text-white">{title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
