import { SignIn } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AuthShell } from '@/components/AuthShell';

export const metadata: Metadata = {
  title: 'Sign in',
  robots: { index: false, follow: false },
};

export default function Page() {
  if (
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
    !process.env.CLERK_SECRET_KEY
  )
    notFound();
  return (
    <AuthShell
      title="Welcome back."
      description="Sign in to your Fee The Developer account."
    >
      <SignIn fallbackRedirectUrl="/dashboard" />
    </AuthShell>
  );
}
