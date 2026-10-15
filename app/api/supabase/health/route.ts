import { NextResponse } from 'next/server';

import {
  isSupabaseConfigured,
  supabaseJwksUrl,
  supabaseProjectRef,
} from '@/lib/supabase/env';
import {
  getSupabaseAdmin,
  isSupabaseAdminConfigured,
} from '@/lib/supabase/server';

/**
 * Connection check for the Supabase wiring.
 *
 * Reports which keys are present and whether the secret-key client can reach
 * `service_catalog`. Intended for deploy verification, not public traffic, so
 * it is never cached and leaks no key material.
 */

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const checks = {
    projectRef: supabaseProjectRef,
    publishableKey: isSupabaseConfigured,
    secretKey: isSupabaseAdminConfigured,
    jwksUrl: supabaseJwksUrl !== null,
  };

  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return NextResponse.json(
      { ok: false, reason: 'supabase-not-configured', checks },
      { status: 503 },
    );
  }

  // A `head: true` request returns no body, so PostgREST errors such as a
  // missing table arrive as a bare 404 with `error` still null. Ask for a row
  // and check the status so a missing table cannot report healthy.
  const { count, error, status } = await supabase
    .from('service_catalog')
    .select('slug', { count: 'exact' })
    .limit(1);

  if (error || status >= 400) {
    return NextResponse.json(
      {
        ok: false,
        reason: 'query-failed',
        checks,
        table: {
          name: 'service_catalog',
          reachable: false,
          status,
          error: error?.message ?? `unexpected status ${status}`,
        },
      },
      { status: 503 },
    );
  }

  return NextResponse.json({
    ok: true,
    checks,
    table: { name: 'service_catalog', reachable: true, activeRows: count ?? 0 },
  });
}
