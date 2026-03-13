import type { Config } from 'tailwindcss';
import preset from '@ecommerce/config/tailwind-preset';

const config: Config = {
  presets: [preset],
  content: [
    './src/**/*.{ts,tsx,mdx}',
    './.storybook/**/*.{ts,tsx}',
  ],
};

export default config;
