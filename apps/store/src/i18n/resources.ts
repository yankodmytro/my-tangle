import type { InitOptions } from 'i18next';
import type { Language } from './config';
import { defaultUiLanguage, supportedUiLanguages } from './config';
import { ruClientTranslations } from './ru/client';
import { ruServerTranslations } from './ru/server';
import { uaClientTranslations } from './ua/client';
import { uaServerTranslations } from './ua/server';

type TranslationTree = {
  [key: string]: string | TranslationTree;
};

export const clientNamespaces = ['client'] as const;
export const serverNamespaces = ['server'] as const;
export const translationNamespaces = [...clientNamespaces, ...serverNamespaces] as const;
export type TranslationNamespace = (typeof translationNamespaces)[number];

export const resources = {
  ru: {
    client: ruClientTranslations,
    server: ruServerTranslations,
  },
  ua: {
    client: uaClientTranslations,
    server: uaServerTranslations,
  },
} as const satisfies Record<Language, Record<string, TranslationTree>>;

export type TranslationResources = typeof resources;

export const loadTranslation = async (language: Language, namespace: TranslationNamespace) => {
  return resources[language][namespace];
};

export const getOptions = (): InitOptions => {
  return {
    supportedLngs: supportedUiLanguages,
    fallbackLng: defaultUiLanguage,
    interpolation: {
      escapeValue: false,
    },
    returnNull: false,
  };
};
