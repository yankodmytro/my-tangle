import { create } from 'zustand';
import { defaultUiLanguage, getHtmlLanguage } from '@i18n/config';

export type PageState = {
  htmlLang: string;
};

type Actions = {
  getHtmlLang: () => string;
};

export const usePageStore = create<PageState & Actions>((_, get) => ({
  htmlLang: getHtmlLanguage(defaultUiLanguage),
  getHtmlLang: () => get().htmlLang,
}));
