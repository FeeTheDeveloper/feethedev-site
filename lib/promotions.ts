export const SIXERS_SEASON_PROMOTION = {
  code: 'SIXERS20',
  percentOff: 20,
  validThrough: 'June 30, 2027',
} as const;

export function normalizePromotionCode(value: unknown): string | null {
  if (typeof value !== 'string') return null;

  return value.trim().toUpperCase() === SIXERS_SEASON_PROMOTION.code
    ? SIXERS_SEASON_PROMOTION.code
    : null;
}
