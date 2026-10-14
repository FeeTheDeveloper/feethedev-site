/**
 * Supabase environment resolution.
 *
 * The project URL and publishable key are safe to expose, so they are read from
 * `NEXT_PUBLIC_*` first and fall back to the server-only spellings that the
 * local `.env.local` uses. The secret key is resolved in `./server` only.
 */

const approvedSupabaseHostSuffix = '.supabase.co';

function readProjectUrl(value: string | undefined): string | null {
  if (!value?.trim()) return null;

  try {
    const url = new URL(value.trim());
    if (
      url.protocol === 'https:' &&
      url.hostname.endsWith(approvedSupabaseHostSuffix)
    ) {
      return url.origin;
    }
  } catch {
    // Keep Supabase unavailable when the environment value is malformed.
  }

  return null;
}

function readKey(value: string | undefined): string | null {
  const key = value?.trim();
  return key ? key : null;
}

/** Project origin, e.g. `https://your-project-ref.supabase.co`. */
export const supabaseUrl = readProjectUrl(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL,
);

/** Publishable (`sb_publishable_…`) key. Browser safe; RLS still applies. */
export const supabasePublishableKey = readKey(
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    process.env.SUPABASE_PUBLISHABLE_KEY,
);

/** JWKS endpoint used to verify Supabase-issued JWTs. */
export const supabaseJwksUrl =
  readProjectUrl(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL,
  ) === null
    ? null
    : `${supabaseUrl}/auth/v1/.well-known/jwks.json`;

/** True when the project URL and publishable key are both configured. */
export const isSupabaseConfigured =
  supabaseUrl !== null && supabasePublishableKey !== null;

/** Project ref (`gbsq…`) pulled from the project URL, for logs and health output. */
export const supabaseProjectRef = supabaseUrl
  ? new URL(supabaseUrl).hostname.split('.')[0]
  : null;
