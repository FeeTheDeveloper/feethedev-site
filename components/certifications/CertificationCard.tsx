'use client';

import { useState } from 'react';
import type { Certification } from '@/lib/certifications';

export function CertificationCard({ certification }: { certification: Certification }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = certification.image && !imageFailed;

  return (
    <article className="neon-border overflow-hidden rounded-[2rem] border border-white/10 bg-black/45 backdrop-blur-xl">
      <div className="relative flex aspect-[16/10] items-center justify-center bg-[#05070b]">
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={certification.image as string}
            alt={`${certification.title} credential`}
            className="h-full w-full object-contain p-6"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex flex-col items-center gap-3 text-slate-400">
            <svg viewBox="0 0 64 64" className="h-16 w-16 text-electric" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="32" cy="26" r="16" />
              <path d="M22 39 18 58l14-8 14 8-4-19" />
              <path d="M26 26l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs uppercase tracking-[0.2em]">Credential Seal</span>
          </div>
        )}
        <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-greenglow/40 bg-greenglow/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-greenglow">
          <span className="h-1.5 w-1.5 rounded-full bg-greenglow shadow-[0_0_10px_rgba(32,255,116,0.9)]" />
          Verified Credential
        </div>
      </div>
      <div className="space-y-4 p-6 sm:p-7">
        <h3 className="text-xl font-bold text-white sm:text-2xl">{certification.title}</h3>
        <dl className="grid grid-cols-2 gap-3 text-sm text-slate-300">
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-slate-500">Issuer</dt>
            <dd>{certification.issuer}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-slate-500">Issued</dt>
            <dd>{new Date(certification.issuedOn).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-slate-500">Issued To</dt>
            <dd>{certification.issuedTo}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-slate-500">Program</dt>
            <dd>{certification.partner}</dd>
          </div>
        </dl>
        <p className="leading-6 text-slate-300">{certification.description}</p>
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href={certification.verifyUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition hover:-translate-y-0.5"
          >
            Verify on Coursera
          </a>
          <a
            href={certification.secondaryVerifyUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Verify on Credly
          </a>
        </div>
      </div>
    </article>
  );
}
