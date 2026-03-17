export type Locale = 'en' | 'uk';
export type ContentLanguage = 'ua' | 'ru';
export type LocalizedString = Record<ContentLanguage, string>;

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
