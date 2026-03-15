import { getHtmlLanguage, type Language } from '@i18n/config';
import { type PageState, usePageStore } from '@stores/page';

export const useInitPageStore = (language: Language): PageState => {
  const { setState } = usePageStore;

  const state = {
    htmlLang: getHtmlLanguage(language),
  };

  setState(state);

  return state;
};
