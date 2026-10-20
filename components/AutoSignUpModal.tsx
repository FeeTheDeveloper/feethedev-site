'use client';

import { SignUpButton, useClerk } from '@clerk/nextjs';
import { useEffect, useRef } from 'react';

export function AutoSignUpModal() {
  const { openSignUp } = useClerk();
  const opened = useRef(false);

  useEffect(() => {
    if (opened.current) return;
    opened.current = true;
    openSignUp({ fallbackRedirectUrl: '/dashboard' });
  }, [openSignUp]);

  return (
    <div className="max-w-sm space-y-3 text-center">
      <p className="text-sm leading-6 text-slate-300">
        Your sign-up window is opening. If it does not appear, use this button.
      </p>
      <SignUpButton mode="modal" fallbackRedirectUrl="/dashboard">
        <button
          type="button"
          className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#05070b] transition hover:bg-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greenglow"
        >
          Open sign-up
        </button>
      </SignUpButton>
    </div>
  );
}
