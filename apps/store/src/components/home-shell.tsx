'use client';

import type { ProductSummary } from '@ecommerce/shared-types';
import { Card } from '@ecommerce/ui';
import { useTranslation } from 'react-i18next';
import { NewsletterForm } from './newsletter-form';

function Content({ products }: { products: ProductSummary[] }) {
  const { t } = useTranslation();

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-12">
      <section className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-border bg-white/70 px-3 py-1 text-sm font-medium backdrop-blur">
            i18next, shadcn/ui, react-hook-form, zod
          </span>
          <div className="space-y-4">
            <h1 className="max-w-2xl text-5xl font-semibold tracking-tight">{t('heroTitle')}</h1>
            <p className="max-w-xl text-lg text-muted-foreground">{t('heroBody')}</p>
          </div>
        </div>
        <NewsletterForm />
      </section>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} className="space-y-3 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Featured</p>
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="text-muted-foreground">{product.description}</p>
            <p className="text-lg font-medium">
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: product.currency,
              }).format(product.price)}
            </p>
          </Card>
        ))}
      </section>
    </main>
  );
}

export function HomeShell({ products }: { products: ProductSummary[] }) {
  return <Content products={products} />;
}
