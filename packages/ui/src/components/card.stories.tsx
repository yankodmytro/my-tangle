import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Card } from './card';
import { Input } from './input';
import { Label } from './label';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[380px] space-y-4 p-6">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Newsletter</h3>
        <p className="text-sm text-muted-foreground">
          Receive new arrivals and curated offers once a week.
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="jane@company.com" />
      </div>
      <Button className="w-full">Subscribe</Button>
    </Card>
  ),
};
