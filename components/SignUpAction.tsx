'use client';

import { SignUpButton } from '@clerk/nextjs';

export function SignUpAction({ className }: { className: string }) {
  return (
    <SignUpButton mode="modal">
      <button type="button" className={className}>
        Sign up
      </button>
    </SignUpButton>
  );
}
