import 'server-only';
import { createClient } from '@supabase/supabase-js';

/**
 * Public-form client. Uses the anon key so every insert still goes through
 * RLS — public forms may only INSERT into the tables their policies allow.
 * Never introduce a service-role client here; admin reads belong behind
 * authenticated, server-only routes.
 */
export function getSupabaseFormClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable.');
  }
  return createClient(url, anonKey, {
    auth: { persistSession: false },
  });
}

/**
 * Privileged client for server-to-server writes only (e.g. verified Stripe
 * webhooks). Never import this into a route a browser can call directly,
 * and never forward the service-role key to the client.
 */
export function getSupabaseServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variable.');
  }
  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
}
