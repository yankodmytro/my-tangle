import i18next, { createInstance, type i18n } from 'i18next';
import { defaultUiLanguage, type Language } from './config';
import {
  getOptions,
  loadTranslation,
  serverNamespaces,
  type TranslationNamespace,
} from './resources';

export const initI18next = async (
  language: Language,
  namespace: TranslationNamespace = 'server'
): Promise<i18n> => {
  const i18nInstance = createInstance();
  const fallbackLanguage = defaultUiLanguage;

  const [languageTranslations, fallbackTranslations] = await Promise.all([
    loadTranslation(language, namespace),
    language === fallbackLanguage
      ? Promise.resolve(undefined)
      : loadTranslation(fallbackLanguage, namespace),
  ]);

  await i18nInstance.init({
    ...getOptions(),
    lng: language,
    ns: [namespace],
    defaultNS: namespace,
    fallbackNS: namespace,
    resources: {
      [language]: {
        [namespace]: languageTranslations,
      },
      ...(fallbackTranslations
        ? {
            [fallbackLanguage]: {
              [namespace]: fallbackTranslations,
            },
          }
        : {}),
    },
  });

  return i18nInstance;
};

export { i18next, serverNamespaces };
