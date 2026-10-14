/**
 * Hand-maintained database types.
 *
 * Mirrors `supabase/migrations/20261001190207_create_fee_developer_service_catalog_20261001.sql`.
 * Regenerate with `supabase gen types typescript` once the CLI is linked.
 */

export type ServiceCatalogRow = {
  id: string;
  slug: string;
  name: string;
  category: 'package' | 'service';
  amount_cents: number;
  currency: 'usd';
  billing_interval: 'one_time' | 'month';
  price_qualifier: string;
  scope_note: string;
  sort_order: number;
  source_ref: string;
  active: boolean;
  created_at: string;
  updated_at: string;
};

export type Database = {
  public: {
    Tables: {
      service_catalog: {
        Row: ServiceCatalogRow;
        Insert: Omit<
          ServiceCatalogRow,
          'id' | 'created_at' | 'updated_at' | 'currency' | 'price_qualifier'
        > &
          Partial<
            Pick<
              ServiceCatalogRow,
              'id' | 'currency' | 'price_qualifier' | 'active'
            >
          >;
        Update: Partial<ServiceCatalogRow>;
        Relationships: [];
      };
    };
    Views: Record<never, never>;
    Functions: Record<never, never>;
    Enums: Record<never, never>;
    CompositeTypes: Record<never, never>;
  };
};
