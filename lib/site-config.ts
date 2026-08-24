export const siteConfig = {
  name: 'Fee The Developer',
  legalName: 'Fee The Developer LLC',
  description:
    'Veteran-owned software and AI automation company building revenue systems, custom applications, integrations, and high-converting digital platforms for growing businesses.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://feethedeveloper.com',
  email: 'contact@feethedeveloper.com',
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? '/start',
  depositUrl: process.env.NEXT_PUBLIC_DEPOSIT_URL ?? '/start#next-step',
  location: 'Texas, United States',
  services: [
    'AI workflow automation',
    'Custom software development',
    'Business websites',
    'E-commerce systems',
    'API integrations',
  ],
  stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'AI integrations'],
} as const;
