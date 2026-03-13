import type { Preview } from '@storybook/react';
import './preview.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'surface',
      values: [
        { name: 'surface', value: '#f8fbfd' },
        { name: 'white', value: '#ffffff' },
        { name: 'ink', value: '#14212b' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen w-full bg-background px-6 py-10 text-foreground">
        <Story />
      </div>
    ),
  ],
};

export default preview;
