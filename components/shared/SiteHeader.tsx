'use client';

import { useState } from 'react';
import Link from 'next/link';

const links = [
  { href: '/#services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/data-intelligence', label: 'Data Intelligence' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/devil-to-developer', label: 'Devil To Developer' },
  { href: '/apprenticeship', label: 'Apprenticeship' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="text-sm font-extrabold uppercase tracking-[0.24em] text-white">
          Fee The Developer
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-slate-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
          <Link href="/start" className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black transition hover:-translate-y-0.5">
            Start Your Build
          </Link>
        </nav>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg border border-white/15 p-2 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 px-6 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-base font-semibold text-slate-200">
                {link.label}
              </Link>
            ))}
            <Link href="/start" onClick={() => setOpen(false)} className="rounded-full bg-white px-4 py-3 text-center text-sm font-bold text-black">
              Start Your Build
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
