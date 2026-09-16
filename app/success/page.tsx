import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Order Confirmed',
  description: 'Your Fee The Developer order was received.',
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-center text-white">
      <div className="max-w-xl space-y-6">
        <div className="mx-auto inline-flex rounded-full border border-greenglow/30 bg-greenglow/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-greenglow">
          Order Confirmed
        </div>
        <h1 className="text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl">You&apos;re in. Let&apos;s build.</h1>
        <p className="text-lg leading-8 text-slate-300">
          Your payment was received. Next, tell us the details of your project so we can start
          production on the right foot.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/start" className="rounded-2xl bg-white px-6 py-3 font-bold text-black transition hover:-translate-y-1">
            Complete Project Intake
          </Link>
          <Link href="/" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
