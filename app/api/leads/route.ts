import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseFormClient } from '@/lib/supabase';
import { sendConfirmationEmail } from '@/lib/resend';

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const { name, email, message, source, serviceInterest } = body ?? {};

  if (typeof name !== 'string' || !name.trim() || typeof email !== 'string' || !email.trim()) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
  }

  const supabase = getSupabaseFormClient();
  const { error } = await supabase.from('leads').insert({
    name: name.trim(),
    email: email.trim(),
    message: typeof message === 'string' ? message.trim() : null,
    source: typeof source === 'string' ? source : 'website',
    service_interest: typeof serviceInterest === 'string' ? serviceInterest : null,
  });

  if (error) {
    console.error('Lead insert failed', error);
    return NextResponse.json({ error: 'Unable to save your request right now.' }, { status: 502 });
  }

  if (process.env.RESEND_API_KEY) {
    try {
      await sendConfirmationEmail({
        to: email,
        subject: 'We received your request — Fee The Developer',
        text: `Hi ${name},\n\nThanks for reaching out to Fee The Developer. We received your request and will follow up shortly.\n\n— Fee The Developer`,
      });
    } catch (error) {
      console.error('Lead confirmation email failed', error);
    }
  }

  return NextResponse.json({ ok: true });
}
