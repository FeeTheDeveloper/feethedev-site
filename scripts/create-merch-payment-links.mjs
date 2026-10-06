#!/usr/bin/env node
/**
 * Creates one Stripe Payment Link per merch product and color, then prints the
 * `MERCH_*_STRIPE_LINK` values the site reads.
 *
 * Each link carries:
 *   - the existing merch price (one price per product; color does not change it)
 *   - a Color dropdown preselected to the color the shopper picked on the site
 *   - a Size dropdown for apparel
 *   - the verified $12.99 shipping rate and shipping address collection
 *
 * Dry run (no writes, the default):
 *   node scripts/create-merch-payment-links.mjs
 * Create the links for real:
 *   node scripts/create-merch-payment-links.mjs --apply
 * Limit shipping destinations (default US):
 *   node scripts/create-merch-payment-links.mjs --apply --countries=US,CA
 *
 * Re-running is safe: a link already tagged with the same product and color in
 * its metadata is reused instead of duplicated.
 */
import fs from 'node:fs';
import path from 'node:path';
import Stripe from 'stripe';

const SHIPPING_RATE_ID = 'shr_1UMWVbHWhC70mvOk4sfQd08F';
const SHIPPING_AMOUNT_CENTS = 1299;

const COLORS = [
  { slug: 'white', label: 'White', value: 'white' },
  { slug: 'heather-gray', label: 'Heather Gray', value: 'heathergray' },
  { slug: 'royal-blue', label: 'Royal Blue', value: 'royalblue' },
  { slug: 'vivid-red', label: 'Vivid Red', value: 'vividred' },
  { slug: 'sage-green', label: 'Sage Green', value: 'sagegreen' },
];

const SIZES = [
  { label: 'S', value: 's' },
  { label: 'M', value: 'm' },
  { label: 'L', value: 'l' },
  { label: 'XL', value: 'xl' },
];

const PRODUCTS = [
  {
    slug: 'hoodie',
    name: 'Graphic hoodie',
    envVar: 'MERCH_HOODIE_STRIPE_LINK',
    productId: 'prod_VNGfvPXixCf9mh',
    priceId: 'price_1UMW7yHWhC70mvOkilcZizjb',
    expectedCents: 10000,
    sized: true,
  },
  {
    slug: 'joggers',
    name: 'Graphic joggers',
    envVar: 'MERCH_JOGGERS_STRIPE_LINK',
    productId: 'prod_VNGfbKGhadG6wM',
    priceId: 'price_1UMW7zHWhC70mvOkOXXxc9g7',
    expectedCents: 6000,
    sized: true,
  },
  {
    slug: 'tshirt',
    name: 'Graphic T-shirt',
    envVar: 'MERCH_TSHIRT_STRIPE_LINK',
    productId: 'prod_VNGfSu2tBYHeyl',
    priceId: 'price_1UMW80HWhC70mvOkg4cR1Qfw',
    expectedCents: 3000,
    sized: true,
  },
  {
    slug: 'hat',
    name: 'Snapback hat',
    envVar: 'MERCH_HAT_STRIPE_LINK',
    productId: 'prod_VNGfj9wOHjl8Jl',
    priceId: 'price_1UMW81HWhC70mvOkr3yemtw4',
    expectedCents: 4000,
    sized: false,
  },
];

const args = process.argv.slice(2);
const apply = args.includes('--apply');
const countries = (
  args.find((a) => a.startsWith('--countries='))?.split('=')[1] ?? 'US'
)
  .split(',')
  .map((c) => c.trim().toUpperCase())
  .filter(Boolean);

function loadEnvLocal() {
  const file = path.join(process.cwd(), '.env.local');
  if (!fs.existsSync(file)) return;
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq < 1) continue;
    const key = trimmed.slice(0, eq).trim();
    if (process.env[key]) continue;
    // Values may be wrapped in quotes, the way dotenv and Next.js read them.
    process.env[key] = trimmed
      .slice(eq + 1)
      .trim()
      .replace(/^(['"])(.*)\1$/, '$2');
  }
}

function fail(message) {
  console.error(`\n✖ ${message}`);
  process.exit(1);
}

loadEnvLocal();

const secretKey = process.env.STRIPE_SECRET_KEY;
if (!secretKey) fail('STRIPE_SECRET_KEY is not set (.env.local or the shell).');

const stripe = new Stripe(secretKey);

console.log(
  `Mode: ${apply ? 'APPLY — creates live Payment Links' : 'DRY RUN — no writes (pass --apply to create)'}`,
);
console.log(`Key:  ${secretKey.startsWith('sk_live') ? 'live' : 'test'}`);
console.log(`Ship: ${countries.join(', ')}\n`);

const account = await stripe.accounts.retrieve().catch((error) => {
  fail(`Stripe rejected the key: ${error.message}`);
});
console.log(
  `Account: ${account.id} — ${account.business_profile?.name ?? account.settings?.dashboard?.display_name ?? 'unnamed'}`,
);

// Verify the shipping rate before anything is attached to a link.
const shippingRate = await stripe.shippingRates
  .retrieve(SHIPPING_RATE_ID)
  .catch((error) =>
    fail(`Shipping rate ${SHIPPING_RATE_ID}: ${error.message}`),
  );
if (
  shippingRate.fixed_amount?.amount !== SHIPPING_AMOUNT_CENTS ||
  shippingRate.fixed_amount?.currency !== 'usd' ||
  !shippingRate.active
) {
  fail(
    `Shipping rate ${SHIPPING_RATE_ID} is not an active $12.99 USD rate (got ${shippingRate.fixed_amount?.amount} ${shippingRate.fixed_amount?.currency}, active=${shippingRate.active}).`,
  );
}
console.log(
  `Shipping rate: ${shippingRate.id} — ${(shippingRate.fixed_amount.amount / 100).toFixed(2)} USD\n`,
);

// Verify every price before creating anything, so a typo cannot ship a wrong amount.
for (const product of PRODUCTS) {
  const price = await stripe.prices
    .retrieve(product.priceId)
    .catch((error) => fail(`Price ${product.priceId}: ${error.message}`));
  if (
    price.unit_amount !== product.expectedCents ||
    price.currency !== 'usd' ||
    price.product !== product.productId
  ) {
    fail(
      `Price ${product.priceId} does not match ${product.name}: expected ${product.expectedCents} usd on ${product.productId}, got ${price.unit_amount} ${price.currency} on ${price.product}.`,
    );
  }
  if (!price.active) fail(`Price ${product.priceId} is archived.`);
  console.log(
    `✓ ${product.name.padEnd(16)} ${product.priceId} $${(price.unit_amount / 100).toFixed(2)}`,
  );
}

// Payment Links require an active product.
console.log('');
for (const product of PRODUCTS) {
  const stored = await stripe.products.retrieve(product.productId);
  if (stored.active) continue;
  if (!apply) {
    console.log(`· would activate ${product.productId} (${product.name})`);
    continue;
  }
  await stripe.products.update(product.productId, { active: true });
  console.log(`✓ activated ${product.productId} (${product.name})`);
}

// Index existing merch links so re-runs reuse rather than duplicate.
const existing = new Map();
for await (const link of stripe.paymentLinks.list({ limit: 100 })) {
  const key = `${link.metadata?.merch_product}:${link.metadata?.merch_color}`;
  if (link.metadata?.merch_product && link.active && !existing.has(key)) {
    existing.set(key, link);
  }
}

function customFields(product, color) {
  const fields = [
    {
      key: 'color',
      label: { type: 'custom', custom: 'Color' },
      type: 'dropdown',
      dropdown: {
        options: COLORS.map((c) => ({ label: c.label, value: c.value })),
        default_value: color.value,
      },
    },
  ];
  if (product.sized) {
    fields.push({
      key: 'size',
      label: { type: 'custom', custom: 'Size' },
      type: 'dropdown',
      dropdown: { options: SIZES },
    });
  }
  return fields;
}

const results = {};
console.log('');

for (const product of PRODUCTS) {
  results[product.slug] = {};
  for (const color of COLORS) {
    const key = `${product.slug}:${color.slug}`;
    const found = existing.get(key);
    if (found) {
      results[product.slug][color.slug] = found.url;
      console.log(`= ${key.padEnd(24)} reused ${found.url}`);
      continue;
    }
    if (!apply) {
      console.log(`· ${key.padEnd(24)} would create`);
      continue;
    }
    const link = await stripe.paymentLinks.create({
      line_items: [{ price: product.priceId, quantity: 1 }],
      custom_fields: customFields(product, color),
      shipping_address_collection: { allowed_countries: countries },
      shipping_options: [{ shipping_rate: SHIPPING_RATE_ID }],
      phone_number_collection: { enabled: true },
      metadata: {
        merch_product: product.slug,
        merch_color: color.slug,
        catalog_category: 'merch',
      },
    });
    results[product.slug][color.slug] = link.url;
    console.log(`+ ${key.padEnd(24)} ${link.url}`);
  }
}

if (!apply) {
  console.log(
    '\nDry run complete. Re-run with --apply to create the links, then paste the printed env values into Vercel and .env.local.',
  );
  process.exit(0);
}

console.log('\n--- Environment variables ---\n');
for (const product of PRODUCTS) {
  console.log(`${product.envVar}=${JSON.stringify(results[product.slug])}`);
}
console.log(
  '\nSet these in Vercel (Production, Preview, Development) and in .env.local.',
);
