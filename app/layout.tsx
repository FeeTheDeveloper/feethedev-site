import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from '@clerk/nextjs';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { siteConfig } from '@/lib/site-config';
import '../styles/globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | Web Design + Full Business Presence`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: 'Alfreddie Postell II', url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'technology',
  keywords: [
    'business website design',
    'web development company',
    'Google Business Profile setup',
    'Google Business verification support',
    'Apple Business Connect setup',
    'Yelp business profile setup',
    'AI automation company',
    'custom software development',
    'business automation',
    'Texas web design company',
    'Texas software company',
    'veteran-owned technology company',
    'business presence services',
    'Hutchrok Solutions Group',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteConfig.siteUrl,
    title: `${siteConfig.name} | Web Design + Full Business Presence`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: 'en_US',
    images: [{ url: '/brand/ftd-logo.svg', width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Web Design + Full Business Presence`,
    description: siteConfig.description,
    images: ['/brand/ftd-logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteConfig.legalName,
  url: siteConfig.siteUrl,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  description: siteConfig.description,
  founder: { '@type': 'Person', name: 'Alfreddie Postell II' },
  areaServed: 'United States',
  serviceType: siteConfig.services,
  knowsAbout: [
    'Web Design',
    'Web Development',
    'Google Business Profile',
    'Apple Business Connect',
    'Yelp Business Profiles',
    'AI Automation',
    'Custom Software',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans`}>
        <ClerkProvider>
          <a href="#main-content" className="sr-only z-[100] rounded bg-white px-4 py-2 text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
            Skip to content
          </a>
          <div className="fixed right-4 top-4 z-50 flex items-center gap-3">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="rounded-full bg-cyan px-4 py-1.5 text-sm font-medium text-black transition hover:opacity-90">
                  Sign up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
