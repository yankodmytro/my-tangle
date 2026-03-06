import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(@Inject(ConfigService) private readonly configService: ConfigService) {}

  get port() {
    return this.configService.getOrThrow<number>('PORT');
  }

  get databaseUrl() {
    return this.configService.getOrThrow<string>('DATABASE_URL');
  }

  get redisUrl() {
    return this.configService.getOrThrow<string>('REDIS_URL');
  }

  get uploadDir() {
    return this.configService.getOrThrow<string>('UPLOAD_DIR');
  }

  get apiUrl() {
    return this.configService.getOrThrow<string>('API_URL');
  }

  get sentryDsn() {
    return this.configService.get<string>('SENTRY_DSN');
  }

  get corsOrigins() {
    return this.configService
      .getOrThrow<string>('CORS_ORIGIN')
      .split(',')
      .map((origin) => origin.trim());
  }
}
