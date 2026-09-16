import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseFormClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const { name, email, branch, notes } = body ?? {};

  if (typeof name !== 'string' || !name.trim() || typeof email !== 'string' || !email.trim()) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
  }

  const supabase = getSupabaseFormClient();
  const { error } = await supabase.from('veteran_verifications').insert({
    name: name.trim(),
    email: email.trim(),
    branch: typeof branch === 'string' ? branch.trim() : null,
    notes: typeof notes === 'string' ? notes.trim() : null,
    status: 'pending',
  });

  if (error) {
    console.error('Veteran verification insert failed', error);
    return NextResponse.json({ error: 'Unable to submit your request right now.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
