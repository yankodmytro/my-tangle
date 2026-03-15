import { useServerTranslation } from '@hooks/server/useServerTranslation';

export const TopBar = async () => {
  const { t } = await useServerTranslation();

  return (
    <div className="flex items-center justify-center w-full h-8 bg-">
      <div className="md:max-w-5xl">{t('global.mainTopBarTitle')}</div>
    </div>
  );
};
