'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { defaultUiLanguage } from './config';

const resources = {
  ru: {
    translation: {
      common: {
        mainTopBarTitle: 'My-Tangle - магазин оригинальных Tangle Teezer'
      },
      heroTitle: 'Запустите свой следующий бестселлер',
      heroBody: 'Современная витрина с локализацией, формами и API-first интеграцией.',
      cta: 'Присоединиться к списку запуска'
    }
  },
  ua: {
    translation: {
      common: {
        mainTopBarTitle: 'My-Tangle - магазин оригінальних Tangle Teezer'
      },
      heroTitle: 'Запустіть свій наступний бестселер',
      heroBody: 'Сучасна вітрина з локалізацією, формами та API-first інтеграцією.',
      cta: 'Приєднатися до списку запуску'
    }
  }
};

void i18next.use(initReactI18next).init({
  resources,
  lng: defaultUiLanguage,
  fallbackLng: defaultUiLanguage,
  interpolation: { escapeValue: false }
});

export { i18next };
