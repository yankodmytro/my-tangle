import { z } from 'zod';

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

export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;
export type LoginValues = z.infer<typeof loginSchema>;
export type AppEnv = z.infer<typeof envSchema>;
