'use client';

import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { I18nextProvider } from 'react-i18next';
import { i18next } from '../i18n/client';
import { defaultUiLanguage, getHtmlLanguage, resolveUiLanguage } from '@i18n/config';

type StoreI18nProviderProps = {
  children: ReactNode;
};

export function StoreI18nProvider({ children }: StoreI18nProviderProps) {
  const pathname = usePathname();
  const routeLanguage = resolveUiLanguage(pathname.split('/')[1]) ?? defaultUiLanguage;

  useEffect(() => {
    void i18next.changeLanguage(routeLanguage);
    document.documentElement.lang = getHtmlLanguage(routeLanguage);
  }, [routeLanguage]);

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
