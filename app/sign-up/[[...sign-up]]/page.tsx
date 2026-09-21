import { SignUp } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AuthShell } from '@/components/AuthShell';

export const metadata: Metadata = {
  title: 'Sign up',
  robots: { index: false, follow: false },
};

export default function Page() {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || !process.env.CLERK_SECRET_KEY) notFound();
  return (
    <AuthShell
      title="Build with us."
      description="Create your Fee The Developer account to get started."
    >
      <SignUp />
    </AuthShell>
  );
}
