export type MerchProduct = {
  slug: string;
  name: string;
  price: number;
  image: string;
  imageAlt: string;
  detail: string;
  sizes: string;
};

export const merchProducts: MerchProduct[] = [
  {
    slug: 'hoodie',
    name: 'Graphic hoodie',
    price: 100,
    image: '/merch/white-hoodie-front.png',
    imageAlt: 'White Fee The Developer hoodie, front design',
    detail: 'Front wordmark and full back globe artwork. White design shown.',
    sizes: 'Size selection confirmed before fulfillment',
  },
  {
    slug: 'joggers',
    name: 'Graphic joggers',
    price: 60,
    image: '/merch/full-line-reference.png',
    imageAlt: 'Fee The Developer jogger design across the color line',
    detail: 'Globe and FTD marks with the Autonomy Has Levels leg detail.',
    sizes: 'Size selection confirmed before fulfillment',
  },
  {
    slug: 'tshirt',
    name: 'Graphic T-shirt',
    price: 30,
    image: '/merch/full-line-reference.png',
    imageAlt: 'Fee The Developer T-shirt design across the color line',
    detail: 'Wordmark front and globe artwork on the back.',
    sizes: 'Size selection confirmed before fulfillment',
  },
  {
    slug: 'hat',
    name: 'Snapback hat',
    price: 40,
    image: '/merch/full-line-reference.png',
    imageAlt: 'Fee The Developer snapback hat design across the color line',
    detail: 'Globe front, FTD side, and Autonomy Has Levels rear detail.',
    sizes: 'Adjustable fit shown in the reference artwork',
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
