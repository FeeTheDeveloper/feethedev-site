import { NextRequest, NextResponse } from 'next/server';
import { getStripeClient } from '@/lib/stripe';
import { allProducts } from '@/lib/products';
import { siteConfig } from '@/lib/site-config';

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const priceId = body?.priceId;

  if (typeof priceId !== 'string' || !priceId) {
    return NextResponse.json({ error: 'priceId is required.' }, { status: 400 });
  }

  const product = allProducts.find((item) => item.stripePriceId === priceId);
  if (!product) {
    return NextResponse.json({ error: 'Unknown price.' }, { status: 400 });
  }

  try {
    const stripe = getStripeClient();
    const session = await stripe.checkout.sessions.create({
      mode: product.billing === 'monthly' ? 'subscription' : 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: product.veteranEligible,
      success_url: `${siteConfig.siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteConfig.siteUrl}/pricing`,
      metadata: { productId: product.id, productSlug: product.slug },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout session creation failed', error);
    return NextResponse.json({ error: 'Unable to start checkout.' }, { status: 502 });
  }
}
