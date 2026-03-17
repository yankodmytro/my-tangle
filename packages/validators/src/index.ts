import { z } from 'zod';

const localizedStringSchema = z.object({
  ua: z.string(),
  ru: z.string()
});

export const newsletterFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  email: z.email('Enter a valid email address')
});

export const loginSchema = z.object({
  email: z.email('Enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters long')
});

export const envSchema = z.object({
  DATABASE_URL: z.url(),
  REDIS_URL: z.url(),
  UPLOAD_DIR: z.string().min(1),
  API_URL: z.url(),
  PORT: z.coerce.number().default(3001),
  CORS_ORIGIN: z.string().default('http://localhost:3000,http://localhost:3002')
});

export const pageCategorySchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1)
});

export const pageTemplateSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1)
});

export const pageStructureSchema = z.object({
  main: z.object({
    id: z.string().min(1),
    parentCategory: pageCategorySchema.nullable(),
    url: z.string().min(1),
    title: localizedStringSchema,
    template: pageTemplateSchema,
    isHidden: z.boolean(),
    includeInSitemap: z.boolean()
  }),
  seo: z.object({
    title: localizedStringSchema,
    description: localizedStringSchema,
    noindex: z.boolean(),
    nofollow: z.boolean()
  }),
  common: z.object({
    description: localizedStringSchema
  })
});

export const storePageCategorySchema = z.object({
  isPopularCategory: z.boolean(),
  listViewByDefault: z.boolean()
});

export const productRatingSchema = z.object({
  value: z.number(),
  votesCount: z.number().int(),
  popularity: z.number()
});

export const brushProductDetailsSchema = z.object({
  hairType: z.string().min(1),
  hairConcern: z.string().min(1),
  appointment: z.string().min(1),
  size: z.string().min(1),
  sizeType: z.string().min(1),
  weight: z.string().min(1)
});

export const storeMainProductSchema = z.object({
  category: pageCategorySchema.nullable(),
  additionalCategories: z.array(pageCategorySchema).nullable(),
  article: z.string().min(1),
  shortDescription: localizedStringSchema,
  color: z.string().min(1),
  colorImage: z.url(),
  price: z.number(),
  oldPrice: z.number(),
  discount: z.number(),
  brand: z.string().min(1),
  countryOfOrigin: z.string().min(1),
  unit: z.string().min(1),
  rating: productRatingSchema,
  brushProduct: brushProductDetailsSchema.nullable()
});

export const blogStructureSchema = z.object({
  previewImage: z.url(),
  image: z.url(),
  previewText: localizedStringSchema,
  text: localizedStringSchema
});

export const userAddressSchema = z.object({
  city: z.string().min(1),
  address: z.string().min(1),
  country: z.string().optional(),
  region: z.string().optional(),
  postalCode: z.string().optional()
});

export const userProfileSchema = z.object({
  id: z.string().min(1),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phone: z.string().min(1),
  email: z.email(),
  address: userAddressSchema
});

export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;
export type LoginValues = z.infer<typeof loginSchema>;
export type AppEnv = z.infer<typeof envSchema>;
export type PageCategoryValues = z.infer<typeof pageCategorySchema>;
export type PageTemplateValues = z.infer<typeof pageTemplateSchema>;
export type PageStructureValues = z.infer<typeof pageStructureSchema>;
export type StorePageCategoryValues = z.infer<typeof storePageCategorySchema>;
export type ProductRatingValues = z.infer<typeof productRatingSchema>;
export type BrushProductDetailsValues = z.infer<typeof brushProductDetailsSchema>;
export type StoreMainProductValues = z.infer<typeof storeMainProductSchema>;
export type BlogStructureValues = z.infer<typeof blogStructureSchema>;
export type UserAddressValues = z.infer<typeof userAddressSchema>;
export type UserProfileValues = z.infer<typeof userProfileSchema>;
