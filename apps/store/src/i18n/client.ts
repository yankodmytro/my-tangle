'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      heroTitle: 'Launch your next bestseller',
      heroBody: 'Modern storefront foundations with forms, localization, and API-first wiring.',
      cta: 'Join the launch list'
    }
  },
  uk: {
    translation: {
      heroTitle: 'Запустіть свій наступний бестселер',
      heroBody: 'Сучасна вітрина з локалізацією, формами та API-first інтеграцією.',
      cta: 'Приєднатися до списку запуску'
    }
  }
};

void i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export { i18next };
