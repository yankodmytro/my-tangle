import type { ProductSummary } from '@ecommerce/shared-types';
import { Card } from '@ecommerce/ui';
import { useServerTranslation } from '@hooks/server/useServerTranslation';
import { NewsletterForm } from '@components/newsletter-form';

async function getProducts(): Promise<ProductSummary[]> {
  try {
    const response = await fetch(`${process.env.API_URL}/catalog/products`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return [];
    }

    return response.json();
  } catch {
    return [];
  }
}

export const HomePage = async () => {
  const { t } = await useServerTranslation();

  console.log(process.env.API_URL, 'data123');

  const products = await getProducts();
  return (
    <div>
      <section className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-border bg-white/70 px-3 py-1 text-sm font-medium backdrop-blur">
            i18next, shadcn/ui, react-hook-form, zod
          </span>
          <div className="space-y-4">
            <h1 className="max-w-2xl text-5xl font-semibold tracking-tight">
              {t('global.heroTitle')}
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">{t('global.heroBody')}</p>
          </div>
        </div>
        <NewsletterForm />
      </section>
      <section>Categories</section>
      <section>Most wanted products</section>
      <section>Info block</section>
      <section>
        {products.map((product) => (
          <Card key={product.id} className="space-y-3 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {t('global.featured')}
            </p>
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
    </div>
  );
};
