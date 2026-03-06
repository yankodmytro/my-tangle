import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('../../components/login-form', () => ({
  LoginForm: () => <div>Login form</div>
}));

describe('admin login page', () => {
  it('renders the login heading', async () => {
    const { default: LoginPage } = await import('./page');
    render(<LoginPage />);
    expect(screen.getByRole('heading', { name: 'Control the catalog' })).toBeInTheDocument();
  });
});
