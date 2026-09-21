const defaultSiteUrl = 'https://feethedeveloper.com';

function getSiteUrl(value: string | undefined): string {
  if (!value?.trim()) return defaultSiteUrl;

  try {
    const url = new URL(value.trim());
    if (url.protocol === 'https:' || url.protocol === 'http:') {
      return url.origin;
    }
  } catch {
    // Fall back to the canonical URL when the environment value is malformed.
  }

  return defaultSiteUrl;
}

export const siteConfig = {
  name: 'Fee The Developer',
  legalName: 'Fee The Developer LLC',
  description:
    'Veteran-owned web design, software, automation, and digital business presence company helping businesses launch strong across the web, Google, Apple, Yelp, and connected business systems.',
  siteUrl: getSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  email: 'contact@feethedeveloper.com',
  phone: '+12144400022',
  phoneDisplay: '(214) 440-0022',
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
  // TODO(King Fee): Replace with the actual Google products/services to promote.
  googleProducts: [
    {
      name: 'Google Product Placeholder 1',
      detail: 'Add the Google product or service to feature here.',
      url: '#',
    },
    {
      name: 'Google Product Placeholder 2',
      detail: 'Add the Google product or service to feature here.',
      url: '#',
    },
    {
      name: 'Google Product Placeholder 3',
      detail: 'Add the Google product or service to feature here.',
      url: '#',
    },
  ],
} as const;
