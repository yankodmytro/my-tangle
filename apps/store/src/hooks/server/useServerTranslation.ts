import type { i18n } from 'i18next';
import { defaultUiLanguage, resolveUiLanguage, type Language } from '@i18n/config';
import type { TranslationNamespace } from '@i18n/resources';
import { initI18next } from '@i18n/serverInitialiser';
import type { Interpolation, OnMissingTranslation } from '@i18n/types';
import { usePageStore } from '../../stores/page';

type ServerTranslation = {
  t: (key: string, interpolation?: Interpolation) => string;
  i18n: i18n;
  language: Language;
};

const getServerLanguage = (language?: string | null): Language => {
  return resolveUiLanguage(language) ?? defaultUiLanguage;
};

const defaultOnMissingTranslation: OnMissingTranslation = ({ namespace, key, language }) => {
  console.error(`[i18n] Missing translation for "${namespace}:${key}" in "${language}"`);

  return key;
};

export const useServerTranslation = async (
  namespace: TranslationNamespace = 'server',
  onMissingTranslation: OnMissingTranslation = defaultOnMissingTranslation
): Promise<ServerTranslation> => {
  const language = usePageStore.getState().getHtmlLang();
  const resolvedLanguage = getServerLanguage(language);
  const i18nextInstance = await initI18next(resolvedLanguage, namespace);

  return {
    language: resolvedLanguage,
    i18n: i18nextInstance,
    t(key: string, interpolation?: Interpolation) {
      const exists = i18nextInstance.exists(key, {
        lng: resolvedLanguage,
        ns: namespace,
      });

      if (!exists) {
        return onMissingTranslation({
          namespace,
          key,
          language: resolvedLanguage,
          i18nextInstance,
        });
      }

      return i18nextInstance.t(key, {
        lng: resolvedLanguage,
        ns: namespace,
        ...interpolation,
      });
    },
  };
};
