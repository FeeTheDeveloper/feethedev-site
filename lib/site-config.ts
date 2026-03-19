export const siteConfig = {
  name: 'FEE THE DEVELOPER',
  description:
    'Production-ready Next.js 14 starter with motion, 3D, and a dark futuristic baseline.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://feethedeveloper.com',
  email: 'contact@feethedeveloper.com',
  stack: [
    'Next.js 14',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'React Three Fiber',
    'Drei',
  ],
} as const;
