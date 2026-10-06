export type MerchImageCrop = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type MerchVariant = {
  /** Display name shown in the color dropdown. */
  color: string;
  /** Stable key used for image names, Stripe metadata, and checkout lookups. */
  colorSlug: string;
  /** Hex used for the swatch dot next to the dropdown. */
  swatch: string;
  image: string;
  imageAlt: string;
  /** Present when the image is a crop out of the shared line reference sheet. */
  imageCrop?: MerchImageCrop;
};

export type MerchProduct = {
  slug: string;
  name: string;
  price: number;
  detail: string;
  sizes: readonly string[];
  variants: readonly MerchVariant[];
};

export const merchColors = [
  'White',
  'Heather Gray',
  'Royal Blue',
  'Vivid Red',
  'Sage Green',
] as const;

export const apparelSizes = ['S', 'M', 'L', 'XL'] as const;

export const shippingRateUsd = 12.99;

const swatches: Record<string, string> = {
  white: '#f1f2f4',
  'heather-gray': '#b7babf',
  'royal-blue': '#2a51b8',
  'vivid-red': '#c8232f',
  'sage-green': '#7f9573',
};

/** The four color photo sets supplied on October 5. */
const photographedColors = [
  { color: 'Heather Gray', colorSlug: 'heather-gray' },
  { color: 'Royal Blue', colorSlug: 'royal-blue' },
  { color: 'Vivid Red', colorSlug: 'vivid-red' },
  { color: 'Sage Green', colorSlug: 'sage-green' },
] as const;

function photoVariants(
  productSlug: string,
  describe: (color: string) => string,
): MerchVariant[] {
  return photographedColors.map(({ color, colorSlug }) => ({
    color,
    colorSlug,
    swatch: swatches[colorSlug],
    image: `/merch/${productSlug}-${colorSlug}.jpg`,
    imageAlt: describe(color),
  }));
}

export const merchProducts: MerchProduct[] = [
  {
    slug: 'hoodie',
    name: 'Graphic hoodie',
    price: 100,
    detail: 'Front wordmark and full back globe artwork.',
    sizes: apparelSizes,
    variants: [
      {
        color: 'White',
        colorSlug: 'white',
        swatch: swatches.white,
        image: '/merch/white-hoodie-front.png',
        imageAlt: 'White Fee The Developer hoodie, front design',
      },
      ...photoVariants(
        'hoodie',
        (color) =>
          `${color} Fee The Developer hoodie, front wordmark and back globe design`,
      ),
    ],
  },
  {
    slug: 'joggers',
    name: 'Graphic joggers',
    price: 60,
    detail: 'Globe and FTD marks with the Autonomy Has Levels leg detail.',
    sizes: apparelSizes,
    variants: [
      {
        color: 'White',
        colorSlug: 'white',
        swatch: swatches.white,
        image: '/merch/full-line-reference.png',
        imageAlt: 'White Fee The Developer joggers, front and back designs',
        imageCrop: { x: 18, y: 538, width: 292, height: 267 },
      },
      ...photoVariants(
        'joggers',
        (color) =>
          `${color} Fee The Developer joggers, front and back leg designs`,
      ),
    ],
  },
  {
    slug: 'tshirt',
    name: 'Graphic T-shirt',
    price: 30,
    detail: 'Wordmark front and globe artwork on the back.',
    sizes: apparelSizes,
    variants: [
      {
        color: 'White',
        colorSlug: 'white',
        swatch: swatches.white,
        image: '/merch/full-line-reference.png',
        imageAlt: 'White Fee The Developer T-shirt, front and back designs',
        imageCrop: { x: 17, y: 286, width: 292, height: 216 },
      },
      ...photoVariants(
        'tshirt',
        (color) =>
          `${color} Fee The Developer T-shirt, front wordmark and back globe design`,
      ),
    ],
  },
  {
    slug: 'hat',
    name: 'Snapback hat',
    price: 40,
    detail: 'Globe front, FTD side, and Autonomy Has Levels rear detail.',
    sizes: [],
    variants: [
      {
        color: 'White',
        colorSlug: 'white',
        swatch: swatches.white,
        image: '/merch/full-line-reference.png',
        imageAlt:
          'White Fee The Developer snapback hat, front, side, and back designs',
        imageCrop: { x: 8, y: 853, width: 300, height: 137 },
      },
      ...photoVariants(
        'hat',
        (color) =>
          `${color} Fee The Developer snapback hat, front, side, and back designs`,
      ),
    ],
  },
];

/** Checkout URLs for one product, keyed by color slug. */
export type MerchCheckoutLinks = Record<string, string>;

function verifyUrl(value: unknown): string | null {
  if (typeof value !== 'string' || !value.trim()) return null;
  try {
    const url = new URL(value.trim());
    return url.protocol === 'https:' && url.hostname === 'buy.stripe.com'
      ? url.toString()
      : null;
  } catch {
    return null;
  }
}

export function verifiedStripeLink(value: string | undefined): string | null {
  return verifyUrl(value);
}

/**
 * Reads one `MERCH_*_STRIPE_LINK` value. It holds either a JSON object of
 * `colorSlug -> payment link` (what `scripts/create-merch-payment-links.mjs`
 * prints) or a single URL used for every color. Anything that is not an
 * HTTPS `buy.stripe.com` URL is dropped, so a bad value falls back to the
 * inquiry button instead of sending buyers somewhere unverified.
 */
export function resolveCheckoutLinks(
  product: MerchProduct,
  value: string | undefined,
): MerchCheckoutLinks {
  if (!value?.trim()) return {};
  const raw = value.trim();
  const links: MerchCheckoutLinks = {};

  if (raw.startsWith('{')) {
    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return {};
    }
    if (!parsed || typeof parsed !== 'object') return {};
    for (const variant of product.variants) {
      const url = verifyUrl(
        (parsed as Record<string, unknown>)[variant.colorSlug],
      );
      if (url) links[variant.colorSlug] = url;
    }
    return links;
  }

  const shared = verifyUrl(raw);
  if (!shared) return {};
  for (const variant of product.variants) {
    links[variant.colorSlug] = shared;
  }
  return links;
}

export type MerchModelShot = {
  color: string;
  colorSlug: string;
  swatch: string;
  image: string;
  imageAlt: string;
};

/**
 * The hero lookbook set: one model, one pose, photographed once per approved
 * colorway so the merch hero can morph between them without the frame moving.
 * Generated on October 5 from the supplied white hoodie artwork; swap these
 * files for studio photography of the same framing and the hero picks it up.
 */
export const merchModelShots: readonly MerchModelShot[] = [
  'white',
  'heather-gray',
  'royal-blue',
  'vivid-red',
  'sage-green',
].map((colorSlug) => {
  const color = merchColors.find(
    (name) => name.toLowerCase().replace(/\s+/g, '-') === colorSlug,
  ) as string;

  return {
    color,
    colorSlug,
    swatch: swatches[colorSlug],
    image: `/merch/model-hoodie-${colorSlug}.jpg`,
    imageAlt: `Model wearing the ${color} Fee The Developer graphic hoodie, front wordmark design`,
  };
});
