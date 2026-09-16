'use client';

import { FormEvent, useState } from 'react';

const fieldClass =
  'w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-greenglow/60 focus:ring-2 focus:ring-greenglow/20';

type LeadCaptureFormProps = {
  source: string;
  heading: string;
  description: string;
  messageLabel?: string;
  messagePlaceholder?: string;
};

export function LeadCaptureForm({
  source,
  heading,
  description,
  messageLabel = 'What are you trying to accomplish?',
  messagePlaceholder,
}: LeadCaptureFormProps) {
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('sending');
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          source,
        }),
      });
      if (!response.ok) throw new Error('Request failed.');
      setState('success');
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div className="rounded-3xl border border-greenglow/30 bg-greenglow/10 p-6" role="status">
        <h3 className="text-xl font-bold text-white">Request received.</h3>
        <p className="mt-2 text-slate-200">We&apos;ll follow up at the email you provided.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6" aria-describedby={`${source}-form-status`}>
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <h3 className="text-xl font-bold text-white">{heading}</h3>
      <p className="text-sm leading-6 text-slate-300">{description}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-200">
          Name *
          <input className={fieldClass} name="name" required autoComplete="name" />
        </label>
        <label className="space-y-2 text-sm text-slate-200">
          Email *
          <input className={fieldClass} name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <label className="space-y-2 text-sm text-slate-200">
        {messageLabel}
        <textarea className={fieldClass} name="message" rows={4} placeholder={messagePlaceholder} />
      </label>
      <button
        type="submit"
        disabled={state === 'sending'}
        className="rounded-full bg-white px-6 py-3 font-bold text-black transition hover:-translate-y-0.5 disabled:opacity-60"
      >
        {state === 'sending' ? 'Sending…' : 'Send Request'}
      </button>
      <p id={`${source}-form-status`} className={state === 'error' ? 'text-sm text-red-300' : 'sr-only'} aria-live="polite">
        {state === 'error' ? 'Something went wrong. Please try again or email contact@feethedeveloper.com.' : 'Complete the form to send your request.'}
      </p>
    </form>
  );
}
