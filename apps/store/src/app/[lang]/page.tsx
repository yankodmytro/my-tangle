import React from 'react';
import type { ProductSummary } from '@ecommerce/shared-types';
import { notFound } from 'next/navigation';
import { HomeShell } from '@components/home-shell';
import { BaseLayout } from '@components/Layout/BaseLayout';
import { resolveUiLanguage } from '@i18n/config';
import { useInitPageStore } from '@hooks/server/store/useInitPageStore';

async function getProducts(): Promise<ProductSummary[]> {
  try {
    const response = await fetch(
      `${process.env.API_URL ?? 'http://localhost:3001'}/catalog/products`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      return [];
    }

    return response.json();
  } catch {
    return [];
  }
}

type StorePageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function HomePage({ params }: StorePageProps) {
  const { lang } = await params;
  const language = resolveUiLanguage(lang);

  if (!language) {
    notFound();
  }

  useInitPageStore(language);

  const products = await getProducts();
  return (
    <BaseLayout>
      <HomeShell products={products} />
    </BaseLayout>
  );
}
