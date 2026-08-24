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
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: 'Alfreddie Postell II', url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'technology',
  keywords: [
    'AI automation company',
    'custom software development',
    'business automation',
    'web application development',
    'API integrations',
    'Texas software company',
    'veteran-owned technology company',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteConfig.siteUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: 'en_US',
    images: [{ url: '/brand/ftd-logo.svg', width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans`}>
        <a href="#main-content" className="sr-only z-[100] rounded bg-white px-4 py-2 text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
