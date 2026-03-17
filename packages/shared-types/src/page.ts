import type { LocalizedString } from './common';

export interface PageCategory {
  id: string;
  name: string;
}

export interface PageTemplate {
  id: string;
  name: string;
}

export interface PageStructureMain {
  id: string;
  parentCategory: PageCategory | null;
  url: string;
  title: LocalizedString;
  template: PageTemplate;
  isHidden: boolean;
  includeInSitemap: boolean;
}

export interface PageStructureSeo {
  title: LocalizedString;
  description: LocalizedString;
  noindex: boolean;
  nofollow: boolean;
}

export interface PageStructureCommon {
  description: LocalizedString;
}

export interface PageStructure {
  main: PageStructureMain;
  seo: PageStructureSeo;
  common: PageStructureCommon;
}
