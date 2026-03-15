'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { defaultUiLanguage } from './config';
import { clientNamespaces, getOptions, resources } from './resources';

const i18nextInstance = i18next.createInstance();

void i18nextInstance.use(initReactI18next).init({
  ...getOptions(),
  lng: defaultUiLanguage,
  ns: clientNamespaces,
  defaultNS: 'client',
  fallbackNS: 'client',
  resources,
});

export default i18nextInstance;
