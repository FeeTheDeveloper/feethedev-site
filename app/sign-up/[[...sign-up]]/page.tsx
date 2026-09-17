import { SignUp } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { AuthShell } from '@/components/AuthShell';

export const metadata: Metadata = {
  title: 'Sign up',
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <AuthShell
      title="Build with us."
      description="Create your Fee The Developer account to get started."
    >
      <SignUp />
    </AuthShell>
  );
}
