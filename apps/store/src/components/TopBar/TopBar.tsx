'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

export const TopBar = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center w-full h-4">
      <div className="md:max-w-5xl">{t('common.mainTopBarTitle')}</div>
    </div>
  );
};
