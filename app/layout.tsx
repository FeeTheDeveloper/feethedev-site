import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import '../styles/globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'FEE THE DEVELOPER',
  description:
    'Production-ready Next.js 14 starter with dark theme, motion, and 3D tooling.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans`}>{children}</body>
    </html>
  );
}
