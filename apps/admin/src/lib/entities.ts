import type {
  BlogStructure,
  PageCategory,
  PageStructure,
  PageTemplate,
  StoreMainProduct,
  StorePageCategory,
  UserProfile,
} from '@ecommerce/shared-types';

export const adminEntityNames = [
  'pageCategory',
  'pageTemplate',
  'pageStructure',
  'storePageCategory',
  'storeMainProduct',
  'blog',
  'user',
] as const;

export type AdminEntityName = (typeof adminEntityNames)[number];

export interface AdminEntityMap {
  pageCategory: PageCategory;
  pageTemplate: PageTemplate;
  pageStructure: PageStructure;
  storePageCategory: StorePageCategory;
  storeMainProduct: StoreMainProduct;
  blog: BlogStructure;
  user: UserProfile;
}

export const adminEntityRoutes: Record<AdminEntityName, string> = {
  pageCategory: '/page-categories',
  pageTemplate: '/page-templates',
  pageStructure: '/page-structure',
  storePageCategory: '/store-category-settings',
  storeMainProduct: '/store-products',
  blog: '/blog-posts',
  user: '/users',
};

export const adminEntityLabels: Record<AdminEntityName, string> = {
  pageCategory: 'Page categories',
  pageTemplate: 'Page templates',
  pageStructure: 'Page structure',
  storePageCategory: 'Store category settings',
  storeMainProduct: 'Store products',
  blog: 'Blog posts',
  user: 'Users',
};

export const adminEntityDescriptions: Record<AdminEntityName, string> = {
  pageCategory: 'Manage category tree nodes used by store pages and product grouping.',
  pageTemplate: 'Define template presets that control how pages are rendered.',
  pageStructure: 'Create pages, set localized titles, SEO data, visibility, and sitemap rules.',
  storePageCategory: 'Configure storefront behavior for category pages and listing defaults.',
  storeMainProduct: 'Manage main product content, pricing, ratings, and brush-specific attributes.',
  blog: 'Edit blog content, preview assets, and localized article text.',
  user: 'View and manage customer profile and contact details.',
};
