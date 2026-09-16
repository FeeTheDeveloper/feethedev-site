export const siteConfig = {
  name: 'Fee The Developer',
  legalName: 'Fee The Developer LLC',
  description:
    'Veteran-owned web design, software, automation, and digital business presence company helping businesses launch strong across the web, Google, Apple, Yelp, and connected business systems in direct partnership with Hutchrok Solutions Group.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://feethedeveloper.com',
  email: 'contact@feethedeveloper.com',
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? '/start',
  depositUrl: process.env.NEXT_PUBLIC_DEPOSIT_URL ?? '/start#next-step',
  location: 'Texas, United States',
  services: [
    'Website design and development',
    'Google Business Profile setup and verification support',
    'Apple Business Connect setup',
    'Yelp business profile setup',
    'AI workflow automation',
    'Custom software development',
    'Business presence systems',
    'API integrations',
  ],
  stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'AI integrations'],
  partner: {
    name: 'Hutchrok Solutions Group LLC',
    url: 'https://hutchrok.com',
  },
} as const;
