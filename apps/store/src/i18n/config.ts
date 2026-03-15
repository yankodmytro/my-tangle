export enum Language {
  Ua = 'ua',
  Ru = 'ru',
}

export const supportedUiLanguages = [Language.Ua, Language.Ru] as const;

export const defaultUiLanguage: Language = Language.Ua;

export function resolveUiLanguage(value?: string | null): Language | undefined {
  if (!value) {
    return undefined;
  }

  const normalizedValue = value.toLowerCase().trim();

  if (normalizedValue === 'uk') {
    return Language.Ua;
  }

  return supportedUiLanguages.find((language) => language === normalizedValue);
}

export function getHtmlLanguage(language: Language): string {
  return language === Language.Ua ? 'uk' : 'ru';
}
