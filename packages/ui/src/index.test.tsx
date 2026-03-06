import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from './index';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Checkout</Button>);
    expect(screen.getByRole('button', { name: 'Checkout' })).toBeInTheDocument();
  });
});
