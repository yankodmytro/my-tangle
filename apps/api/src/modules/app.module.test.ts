import { describe, expect, it } from 'vitest';
import { AuthService } from './auth/auth.service';

describe('api smoke test', () => {
  it('creates a token payload', async () => {
    const service = new AuthService({
      user: {
        findUnique: async () => ({
          id: '1',
          email: 'admin@example.com',
          passwordHash: 'password123',
          role: 'ADMIN',
        }),
      },
    } as never);

    await expect(service.login('admin@example.com', 'password123')).resolves.toEqual(
      expect.objectContaining({ token: expect.any(String) })
    );
  });
});
