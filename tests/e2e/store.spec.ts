import { expect, test } from '@playwright/test';

test('store home page loads', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000');
  await expect(page.getByRole('heading', { name: /launch your next bestseller/i })).toBeVisible();
});
