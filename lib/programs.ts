export type ApprenticeshipStage = {
  number: string;
  title: string;
  summary: string;
  skills: string[];
};

export const apprenticeshipStages: ApprenticeshipStage[] = [
  {
    number: '01',
    title: 'Foundation',
    summary: 'The fundamentals every developer needs before touching production code.',
    skills: ['Git & GitHub', 'Command line', 'VS Code', 'HTML, CSS, JavaScript', 'Python fundamentals', 'Documentation', 'AI-assisted development'],
  },
  {
    number: '02',
    title: 'Application Development',
    summary: 'Building and shipping real applications.',
    skills: ['React', 'Next.js', 'TypeScript', 'APIs', 'Supabase & database fundamentals', 'Deployment', 'Debugging & testing'],
  },
  {
    number: '03',
    title: 'Business Systems',
    summary: 'The systems that make a business run, not just a website.',
    skills: ['Stripe', 'Resend', 'Google Workspace', 'Authentication', 'Automation & CRM', 'Dashboards', 'Business websites'],
  },
  {
    number: '04',
    title: 'Production Contribution',
    summary: 'Controlled, reviewed contribution to real Fee The Developer projects. No unsupervised production deployment.',
    skills: ['Documentation', 'QA', 'UI components', 'Low-risk bug fixes', 'API tests', 'Data cleanup', 'Internal tooling', 'Website content'],
  },
  {
    number: '05',
    title: 'Portfolio Graduation',
    summary: 'Leaving with proof, not just a certificate of completion.',
    skills: ['GitHub contribution history', 'Deployed projects', 'Personal portfolio', 'Documented case studies', 'Certifications', 'Code reviews', 'Performance-based references'],
  },
];

export type DevilToDeveloperFlip = {
  from: string;
  to: string;
};

export const devilToDeveloperFlips: DevilToDeveloperFlip[] = [
  { from: 'Scam pages', to: 'Conversion-focused landing pages and legitimate e-commerce' },
  { from: 'Account takeovers', to: 'Identity, authentication, OAuth, and access control' },
  { from: 'Bot abuse', to: 'APIs, automation, agents, and workflow engineering' },
  { from: 'Payment fraud', to: 'Payments infrastructure, fraud prevention, and Stripe integrations' },
  { from: 'Unauthorized hacking', to: 'Ethical security labs, defensive security, and CTF practice' },
  { from: 'Hidden activity', to: 'Documentation, compliance, invoicing, and business operations' },
];
