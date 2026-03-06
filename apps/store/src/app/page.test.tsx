import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('../components/home-shell', () => ({
  HomeShell: ({ products }: { products: Array<{ name: string }> }) => <div>{products[0]?.name}</div>
}));

describe('store page', () => {
  it('renders products from the API response', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [{ id: '1', name: 'Desk Lamp', slug: 'desk-lamp', description: 'Warm light', price: 129, currency: 'USD' }]
      })
    );

    const { default: Page } = await import('./page');
    render(await Page());

    expect(screen.getByText('Desk Lamp')).toBeInTheDocument();
  });
});
