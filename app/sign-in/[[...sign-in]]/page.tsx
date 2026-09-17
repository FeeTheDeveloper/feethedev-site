import { SignIn } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { AuthShell } from '@/components/AuthShell';

export const metadata: Metadata = {
  title: 'Sign in',
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <AuthShell
      title="Welcome back."
      description="Sign in to your Fee The Developer account."
    >
      <SignIn />
    </AuthShell>
  );
}
