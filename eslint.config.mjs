import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      'dist',
      '.next',
      'coverage',
      'node_modules',
      'storybook-static',
      '.storybook-home',
      'playwright-report',
      'test-results',
      'uploads'
    ]
  }
);
