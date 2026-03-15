'use client';

import i18next from '@i18n/clientInitialiser';
import { resolveUiLanguage } from '@i18n/config';
import type { TranslationNamespace } from '@i18n/resources';
import type { Interpolation, OnMissingTranslation } from '@i18n/types';
import { usePageStore } from '@stores/page';
import { useEffect } from 'react';
import { useTranslation as useI18nextTranslation } from 'react-i18next';

const defaultOnMissingTranslation: OnMissingTranslation = ({ namespace, key, language }) => {
  console.error(`[i18n] Missing translation for "${namespace}:${key}" in "${language}"`);

  return key;
};

export const useClientTranslation = (
  namespace: TranslationNamespace = 'client',
  onMissingTranslation: OnMissingTranslation = defaultOnMissingTranslation
) => {
  const htmlLang = usePageStore((state) => state.htmlLang);
  const resolvedLanguage = resolveUiLanguage(htmlLang);
  const { t: translate, i18n: i18nInstance } = useI18nextTranslation(namespace, {
    i18n: i18next,
  });

  useEffect(() => {
    if (resolvedLanguage) {
      void i18nInstance.changeLanguage(resolvedLanguage);
    }
  }, [i18nInstance, resolvedLanguage]);

  return {
    i18n: i18nInstance,
    t(key: string, interpolation?: Interpolation) {
      const language = resolvedLanguage ?? i18nInstance.resolvedLanguage ?? '';
      const exists = i18nInstance.exists(key, { lng: language, ns: namespace });

      if (!exists) {
        return onMissingTranslation({
          namespace,
          key,
          language,
          i18nextInstance: i18nInstance,
        });
      }

      return translate(key, interpolation);
    },
  };
};
