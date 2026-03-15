import React, { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { defaultUiLanguage, getHtmlLanguage } from '@i18n/config';
import { Body } from '@components/Body';

export const metadata: Metadata = {
  title: 'Storefront',
  description: 'E-commerce storefront',
};

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang={getHtmlLanguage(defaultUiLanguage)} suppressHydrationWarning>
      <Body>{children}</Body>
    </html>
  );
};

export default RootLayout;
