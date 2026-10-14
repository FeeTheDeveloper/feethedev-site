'use client';

import { createClient, type SupabaseClient } from '@supabase/supabase-js';

import type { Database } from './types';

/**
 * Browser Supabase client.
 *
 * Only the publishable key reaches the browser, so every query is still
 * governed by row level security. Reads the `NEXT_PUBLIC_*` spellings directly
 * so Next.js can inline them at build time.
 */

const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() || null;
const publishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim() || null;

let browserClient: SupabaseClient<Database> | null = null;

/** Returns `null` when the browser-visible Supabase variables are absent. */
export function getSupabaseBrowser(): SupabaseClient<Database> | null {
  if (!url || !publishableKey) return null;

  browserClient ??= createClient<Database>(url, publishableKey, {
    auth: { persistSession: true, autoRefreshToken: true },
  });

  return browserClient;
}
