export type Locale = 'en' | 'uk';

export interface ProductSummary {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
}

export interface HealthStatus {
  status: 'ok' | 'error';
  database: 'up' | 'down';
  redis: 'up' | 'down';
  timestamp: string;
}

export interface UserSession {
  id: string;
  email: string;
  role: 'ADMIN' | 'CUSTOMER';
}
