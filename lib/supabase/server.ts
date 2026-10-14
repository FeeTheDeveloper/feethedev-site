import 'server-only';

import { createClient, type SupabaseClient } from '@supabase/supabase-js';

import { supabasePublishableKey, supabaseUrl } from './env';
import type { Database } from './types';

/**
 * Server-side Supabase clients.
 *
 * `getSupabaseAdmin()` uses the secret key and bypasses row level security, so
 * it must never be imported into a client component — `server-only` enforces
 * that at build time.
 */

const secretKey = process.env.SUPABASE_SECRET_KEY?.trim() || null;

/** True when the secret key is configured alongside the project URL. */
export const isSupabaseAdminConfigured =
  supabaseUrl !== null && secretKey !== null;

let adminClient: SupabaseClient<Database> | null = null;
let anonServerClient: SupabaseClient<Database> | null = null;

/**
 * Service-role client for trusted server work (reads of RLS-protected tables,
 * writes, migrations-adjacent tasks). Returns `null` when the project is not
 * configured so callers can degrade instead of throwing at module load.
 */
export function getSupabaseAdmin(): SupabaseClient<Database> | null {
  if (!supabaseUrl || !secretKey) return null;

  adminClient ??= createClient<Database>(supabaseUrl, secretKey, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { 'x-application-name': 'feethedev-site' } },
  });

  return adminClient;
}

/**
 * Publishable-key client for server rendering that should still be subject to
 * row level security.
 */
export function getSupabaseServer(): SupabaseClient<Database> | null {
  if (!supabaseUrl || !supabasePublishableKey) return null;

  anonServerClient ??= createClient<Database>(
    supabaseUrl,
    supabasePublishableKey,
    {
      auth: { persistSession: false, autoRefreshToken: false },
      global: { headers: { 'x-application-name': 'feethedev-site' } },
    },
  );

  return anonServerClient;
}
