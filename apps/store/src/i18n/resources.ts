import type { InitOptions } from 'i18next';
import type { Language } from './config';
import { defaultUiLanguage, supportedUiLanguages } from './config';
import { ruServerTranslations } from './ru/server';
import { uaServerTranslations } from './ua/server';

type TranslationTree = {
  [key: string]: string | TranslationTree;
};

export const serverNamespaces = ['server'] as const;
export type TranslationNamespace = (typeof serverNamespaces)[number];

export const resources = {
  ru: {
    server: ruServerTranslations,
  },
  ua: {
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
