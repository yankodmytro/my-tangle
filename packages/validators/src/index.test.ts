import { describe, expect, it } from 'vitest';
import { newsletterFormSchema } from './index';

describe('newsletterFormSchema', () => {
  it('rejects invalid email input', () => {
    const result = newsletterFormSchema.safeParse({
      name: 'A',
      email: 'not-an-email'
    });

    expect(result.success).toBe(false);
  });
});
