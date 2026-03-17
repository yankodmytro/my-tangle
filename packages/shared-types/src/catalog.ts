import type { LocalizedString } from './common';
import type { PageCategory } from './page';

export interface ProductSummary {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
}

export interface StorePageCategory {
  isPopularCategory: boolean;
  listViewByDefault: boolean;
}

export interface ProductRating {
  value: number;
  votesCount: number;
  popularity: number;
}

export interface BrushProductDetails {
  hairType: string;
  hairConcern: string;
  appointment: string;
  size: string;
  sizeType: string;
  weight: string;
}

export interface StoreMainProduct {
  category: PageCategory | null;
  additionalCategories: PageCategory[] | null;
  article: string;
  shortDescription: LocalizedString;
  color: string;
  colorImage: string;
  price: number;
  oldPrice: number;
  discount: number;
  brand: string;
  countryOfOrigin: string;
  unit: string;
  rating: ProductRating;
  brushProduct: BrushProductDetails | null;
}
