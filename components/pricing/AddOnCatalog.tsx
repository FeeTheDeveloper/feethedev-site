import { Card } from '@/components/ui';
import { CheckoutButton } from '@/components/checkout/CheckoutButton';
import { addOnProducts, formatUsd } from '@/lib/products';

export function AddOnCatalog() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {addOnProducts.map((product) => (
        <Card key={product.id} className="flex h-full flex-col p-5">
          <h4 className="text-lg font-bold text-white">{product.name}</h4>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-extrabold text-white">{formatUsd(product.priceCents)}</span>
            {product.billing === 'monthly' && <span className="text-xs text-slate-400">/month</span>}
          </div>
          <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{product.description}</p>
          <div className="mt-5">
            <CheckoutButton priceId={product.stripePriceId} label={product.ctaLabel} />
          </div>
        </Card>
      ))}
    </div>
  );
}
