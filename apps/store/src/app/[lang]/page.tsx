import React from 'react';
import { notFound } from 'next/navigation';
import { HomePage } from '@components/HomePage/HomePage';
import { BaseLayout } from '@components/Layout/BaseLayout';
import { resolveUiLanguage } from '@i18n/config';
import { useInitPageStore } from '@hooks/server/store/useInitPageStore';

type StorePageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function Page({ params }: StorePageProps) {
  const { lang } = await params;
  const language = resolveUiLanguage(lang);

  if (!language) {
    notFound();
  }

  useInitPageStore(language);

  return (
    <BaseLayout>
      <HomePage />
    </BaseLayout>
  );
}
