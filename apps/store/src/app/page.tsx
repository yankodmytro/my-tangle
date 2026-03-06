import React from 'react';
import type { ProductSummary } from '@ecommerce/shared-types';
import { HomeShell } from '../components/home-shell';

async function getProducts(): Promise<ProductSummary[]> {
  try {
    const response = await fetch(`${process.env.API_URL ?? 'http://localhost:3001'}/catalog/products`, {
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      return [];
    }

    return response.json();
  } catch {
    return [];
  }
}

export default async function Page() {
  const products = await getProducts();
  return <HomeShell products={products} />;
}
