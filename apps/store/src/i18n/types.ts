import type { i18n } from 'i18next';

export type Interpolation = Record<string, string | number>;

export type OnMissingTranslationArgs = {
  namespace: string;
  key: string;
  language: string;
  i18nextInstance: i18n;
};

export type OnMissingTranslation = (args: OnMissingTranslationArgs) => string;
