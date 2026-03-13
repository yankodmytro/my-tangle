import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Continue',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Disabled: Story = {
  args: {
    children: 'Processing',
    disabled: true,
  },
};

export const LongLabel: Story = {
  args: {
    children: 'Add item to cart',
    className: 'min-w-48',
  },
};
