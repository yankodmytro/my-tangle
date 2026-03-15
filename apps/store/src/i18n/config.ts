export const supportedUiLanguages = ['ua', 'ru'] as const;
export type UiLanguage = (typeof supportedUiLanguages)[number];

export const defaultUiLanguage: UiLanguage = 'ua';

export function resolveUiLanguage(value?: string | null): UiLanguage | undefined {
  if (!value) {
    return undefined;
  }

  return supportedUiLanguages.find((language) => language === value.toLowerCase().trim());
}

export function getHtmlLanguage(language: UiLanguage): string {
  return language === 'ua' ? 'uk' : 'ru';
}
