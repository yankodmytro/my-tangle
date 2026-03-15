import { useServerTranslation } from '@hooks/server/useServerTranslation';

export const Copyright = async () => {
  const { t } = await useServerTranslation();

  return <div>{t('global.copyright')}</div>;
};
