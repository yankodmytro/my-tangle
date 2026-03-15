import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

const redirectMock = vi.fn();

vi.mock('../components/home-shell', () => ({
  HomeShell: ({ products }: { products: Array<{ name: string }> }) => (
    <div>{products[0]?.name}</div>
  ),
}));

vi.mock('../components/Layout/BaseLayout', () => ({
  BaseLayout: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

vi.mock('next/navigation', () => ({
  redirect: (url: string) => redirectMock(url),
}));

describe('store page', () => {
  it('redirects root route to /ua', async () => {
    const { default: Page } = await import('./page');

    Page();

    expect(redirectMock).toHaveBeenCalledWith('/ua');
  });

  it('renders products from the API response', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [
          {
            id: '1',
            name: 'Desk Lamp',
            slug: 'desk-lamp',
            description: 'Warm light',
            price: 129,
            currency: 'USD',
          },
        ],
      })
    );

    const { default: Page } = await import('./[lang]/page');
    render(await Page({ params: Promise.resolve({ lang: 'ua' }) }));

    expect(screen.getByText('Desk Lamp')).toBeInTheDocument();
  });
});
