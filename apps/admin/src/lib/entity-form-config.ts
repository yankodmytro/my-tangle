import type { AdminEntityName } from './entities';

export type AdminFieldType =
  | 'text'
  | 'textarea'
  | 'number'
  | 'boolean'
  | 'image'
  | 'relation'
  | 'localized'
  | 'localized-textarea';

export type AdminEntityField = {
  name: string;
  label: string;
  type: AdminFieldType;
  hint?: string;
};

export type AdminEntitySection = {
  title: string;
  description?: string;
  fields: AdminEntityField[];
};

export const adminEntityFormConfig: Record<AdminEntityName, AdminEntitySection[]> = {
  pageCategory: [
    {
      title: 'Main',
      fields: [
        { name: 'id', label: 'ID', type: 'text' },
        { name: 'name', label: 'Name', type: 'text' },
      ],
    },
  ],
  pageTemplate: [
    {
      title: 'Main',
      fields: [
        { name: 'id', label: 'ID', type: 'text' },
        { name: 'name', label: 'Name', type: 'text' },
      ],
    },
  ],
  pageStructure: [
    {
      title: 'Main',
      fields: [
        { name: 'main.id', label: 'ID', type: 'text' },
        { name: 'main.parentCategory', label: 'Parent category', type: 'relation' },
        { name: 'main.url', label: 'URL', type: 'text' },
        { name: 'main.title', label: 'Title', type: 'localized' },
        { name: 'main.template', label: 'Template', type: 'relation' },
        { name: 'main.isHidden', label: 'Hidden', type: 'boolean' },
        { name: 'main.includeInSitemap', label: 'Include in sitemap', type: 'boolean' },
      ],
    },
    {
      title: 'SEO',
      fields: [
        { name: 'seo.title', label: 'SEO title', type: 'localized' },
        { name: 'seo.description', label: 'SEO description', type: 'localized-textarea' },
        { name: 'seo.noindex', label: 'Noindex', type: 'boolean' },
        { name: 'seo.nofollow', label: 'Nofollow', type: 'boolean' },
      ],
    },
    {
      title: 'Common',
      fields: [
        { name: 'common.description', label: 'Description', type: 'localized-textarea' },
      ],
    },
  ],
  storePageCategory: [
    {
      title: 'Display',
      fields: [
        { name: 'isPopularCategory', label: 'Popular category', type: 'boolean' },
        { name: 'listViewByDefault', label: 'List view by default', type: 'boolean' },
      ],
    },
  ],
  storeMainProduct: [
    {
      title: 'Main',
      fields: [
        { name: 'category', label: 'Main category', type: 'relation' },
        { name: 'additionalCategories', label: 'Additional categories', type: 'relation' },
        { name: 'article', label: 'Article', type: 'text' },
        { name: 'shortDescription', label: 'Short description', type: 'localized-textarea' },
        { name: 'brand', label: 'Brand', type: 'relation' },
        { name: 'countryOfOrigin', label: 'Country of origin', type: 'text' },
        { name: 'unit', label: 'Unit', type: 'text' },
      ],
    },
    {
      title: 'Visual',
      fields: [
        { name: 'color', label: 'Color', type: 'text' },
        { name: 'colorImage', label: 'Color image', type: 'image' },
      ],
    },
    {
      title: 'Pricing',
      fields: [
        { name: 'price', label: 'Price', type: 'number' },
        { name: 'oldPrice', label: 'Old price', type: 'number' },
        { name: 'discount', label: 'Discount', type: 'number' },
      ],
    },
    {
      title: 'Rating',
      fields: [
        { name: 'rating.value', label: 'Value', type: 'number' },
        { name: 'rating.votesCount', label: 'Votes count', type: 'number' },
        { name: 'rating.popularity', label: 'Popularity', type: 'number' },
      ],
    },
    {
      title: 'Brush details',
      fields: [
        { name: 'brushProduct.hairType', label: 'Hair type', type: 'text' },
        { name: 'brushProduct.hairConcern', label: 'Hair concern', type: 'text' },
        { name: 'brushProduct.appointment', label: 'Appointment', type: 'text' },
        { name: 'brushProduct.size', label: 'Size', type: 'text' },
        { name: 'brushProduct.sizeType', label: 'Size type', type: 'text' },
        { name: 'brushProduct.weight', label: 'Weight', type: 'text' },
      ],
    },
  ],
  blog: [
    {
      title: 'Media',
      fields: [
        { name: 'previewImage', label: 'Preview image', type: 'image' },
        { name: 'image', label: 'Main image', type: 'image' },
      ],
    },
    {
      title: 'Content',
      fields: [
        { name: 'previewText', label: 'Preview text', type: 'localized-textarea' },
        { name: 'text', label: 'Text', type: 'localized-textarea' },
      ],
    },
  ],
  user: [
    {
      title: 'Identity',
      fields: [
        { name: 'id', label: 'ID', type: 'text' },
        { name: 'firstName', label: 'First name', type: 'text' },
        { name: 'lastName', label: 'Last name', type: 'text' },
        { name: 'phone', label: 'Phone', type: 'text' },
        { name: 'email', label: 'Email', type: 'text' },
      ],
    },
    {
      title: 'Address',
      fields: [
        { name: 'address.city', label: 'City', type: 'text' },
        { name: 'address.address', label: 'Address', type: 'textarea' },
        { name: 'address.country', label: 'Country', type: 'text' },
        { name: 'address.region', label: 'Region', type: 'text' },
        { name: 'address.postalCode', label: 'Postal code', type: 'text' },
      ],
    },
  ],
};
