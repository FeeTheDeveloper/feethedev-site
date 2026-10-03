export type MerchProduct = {
  slug: string;
  name: string;
  price: number;
  image: string;
  imageAlt: string;
  imageCrop?: { x: number; y: number; width: number; height: number };
  detail: string;
  sizes: readonly string[];
  colors: readonly string[];
};

export const merchColors = [
  'White',
  'Heather Gray',
  'Royal Blue',
  'Vivid Red',
  'Sage Green',
] as const;

export const apparelSizes = ['S', 'M', 'L', 'XL'] as const;

export const merchProducts: MerchProduct[] = [
  {
    slug: 'hoodie',
    name: 'Graphic hoodie',
    price: 100,
    image: '/merch/white-hoodie-front.png',
    imageAlt: 'White Fee The Developer hoodie, front design',
    detail: 'Front wordmark and full back globe artwork. White design shown.',
    sizes: apparelSizes,
    colors: merchColors,
  },
  {
    slug: 'joggers',
    name: 'Graphic joggers',
    price: 60,
    image: '/merch/full-line-reference.png',
    imageAlt: 'White Fee The Developer joggers, front and back designs',
    imageCrop: { x: 18, y: 538, width: 292, height: 267 },
    detail: 'Globe and FTD marks with the Autonomy Has Levels leg detail.',
    sizes: apparelSizes,
    colors: merchColors,
  },
  {
    slug: 'tshirt',
    name: 'Graphic T-shirt',
    price: 30,
    image: '/merch/full-line-reference.png',
    imageAlt: 'White Fee The Developer T-shirt, front and back designs',
    imageCrop: { x: 17, y: 286, width: 292, height: 216 },
    detail: 'Wordmark front and globe artwork on the back.',
    sizes: apparelSizes,
    colors: merchColors,
  },
  {
    slug: 'hat',
    name: 'Snapback hat',
    price: 40,
    image: '/merch/full-line-reference.png',
    imageAlt: 'White Fee The Developer snapback hat, front, side, and back designs',
    imageCrop: { x: 8, y: 853, width: 300, height: 137 },
    detail: 'Globe front, FTD side, and Autonomy Has Levels rear detail.',
    sizes: [],
    colors: merchColors,
  },
];

export function verifiedStripeLink(value: string | undefined): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && url.hostname === 'buy.stripe.com'
      ? url.toString()
      : null;
  } catch {
    return null;
  }
}
