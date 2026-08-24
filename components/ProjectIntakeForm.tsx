'use client';

import { FormEvent, useState } from 'react';
import { siteConfig } from '@/lib/site-config';

const fieldClass = 'w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-greenglow/60 focus:ring-2 focus:ring-greenglow/20';

export function ProjectIntakeForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('sending');
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error ?? 'Submission failed.');
      setState('success');
      form.reset();
    } catch (error) {
      setState('error');
      setMessage(error instanceof Error ? error.message : 'Submission failed.');
    }
  }

  if (state === 'success') {
    return (
      <div id="next-step" className="space-y-6 rounded-[2rem] border border-greenglow/30 bg-greenglow/10 p-7" role="status">
        <h2 className="text-3xl font-semibold text-white">Your build request is in.</h2>
        <p className="text-slate-200">Lock the strategy session next. Qualified projects can secure a production slot with the deposit link.</p>
        <div className="flex flex-wrap gap-3">
          <a className="rounded-full bg-white px-5 py-3 font-semibold text-black" href={siteConfig.bookingUrl}>Schedule Strategy Session</a>
          <a className="rounded-full border border-white/20 px-5 py-3 font-semibold text-white" href={siteConfig.depositUrl}>Secure Production Slot</a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8" aria-describedby="form-status">
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-200">Name *<input className={fieldClass} name="name" required autoComplete="name" /></label>
        <label className="space-y-2 text-sm text-slate-200">Email *<input className={fieldClass} name="email" type="email" required autoComplete="email" /></label>
        <label className="space-y-2 text-sm text-slate-200">Company<input className={fieldClass} name="company" autoComplete="organization" /></label>
        <label className="space-y-2 text-sm text-slate-200">Service *
          <select className={fieldClass} name="service" required defaultValue=""><option value="" disabled>Select one</option><option>Business Authority System</option><option>E-Commerce System</option><option>Custom Software</option><option>AI Automation & Integration</option><option>Website Redesign</option></select>
        </label>
        <label className="space-y-2 text-sm text-slate-200">Investment range *
          <select className={fieldClass} name="budget" required defaultValue=""><option value="" disabled>Select range</option><option>$1,500–$3,500</option><option>$3,500–$7,500</option><option>$7,500–$15,000</option><option>$15,000+</option></select>
        </label>
        <label className="space-y-2 text-sm text-slate-200">Target timeline<input className={fieldClass} name="timeline" placeholder="Example: 30–45 days" /></label>
      </div>
      <label className="space-y-2 text-sm text-slate-200">What must this system accomplish? *<textarea className={fieldClass} name="goals" minLength={20} rows={6} required placeholder="Describe the business problem, users, desired outcome, and required integrations." /></label>
      <button className="rounded-full bg-gradient-to-r from-redglow via-white to-greenglow p-[1px] disabled:opacity-60" disabled={state === 'sending'} type="submit"><span className="block rounded-full bg-black px-6 py-4 font-semibold uppercase tracking-[0.16em] text-white">{state === 'sending' ? 'Submitting…' : 'Submit Build Request'}</span></button>
      <p id="form-status" className={state === 'error' ? 'text-sm text-red-300' : 'sr-only'} aria-live="polite">{state === 'error' ? message : 'Complete the project intake form.'}</p>
    </form>
  );
}
