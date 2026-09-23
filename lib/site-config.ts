const defaultSiteUrl = 'https://feethedeveloper.com';
const defaultBookingUrl = 'https://calendar.app.google/TAWDaUTtgBJA5VgSA';
const approvedBookingHosts = new Set([
  'calendar.app.google',
  'calendar.google.com',
]);
const approvedDepositHosts = new Set(['buy.stripe.com']);

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

function getBookingUrl(value: string | undefined): string {
  if (!value?.trim()) return defaultBookingUrl;

  try {
    const url = new URL(value.trim());
    if (url.protocol === 'https:' && approvedBookingHosts.has(url.hostname)) {
      return url.toString();
    }
  } catch {
    // Fall back to the approved Google Calendar booking page.
  }

  return defaultBookingUrl;
}

function getDepositUrl(value: string | undefined): string {
  if (!value?.trim()) return '/start#next-step';

  try {
    const url = new URL(value.trim());
    if (url.protocol === 'https:' && approvedDepositHosts.has(url.hostname)) {
      return url.toString();
    }
  } catch {
    // Fall back to the internal next step when the payment URL is malformed.
  }

  return '/start#next-step';
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
  bookingUrl: getBookingUrl(process.env.NEXT_PUBLIC_BOOKING_URL),
  depositUrl: getDepositUrl(process.env.NEXT_PUBLIC_DEPOSIT_URL),
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
  googleProducts: [
    {
      name: 'Workspace',
      detail: 'Calendar, Docs, Sheets, Drive, Meet, and shared team workflows.',
      url: '#',
    },
    {
      name: 'Gemini + AI',
      detail: 'Practical assistance for research, creation, and automation.',
      url: '#',
    },
    {
      name: 'Search + Maps',
      detail: 'Discovery and local presence connected to your business.',
      url: '#',
    },
  ],
} as const;
