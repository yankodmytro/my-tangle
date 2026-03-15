import 'reflect-metadata';
import cookieParser from 'cookie-parser';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as Sentry from '@sentry/nestjs';
import { json } from 'express';
import { join } from 'node:path';
import pino from 'pino';
import pinoHttp from 'pino-http';
import { AppModule } from './modules/app.module';
import { AppConfigService } from './modules/app-config/app-config.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { bufferLogs: true });
  const config = app.get(AppConfigService);
  const logger = pino({
    level: 'info',
    transport: process.env.NODE_ENV === 'production' ? undefined : { target: 'pino-pretty' },
  });

  Sentry.init({
    dsn: config.sentryDsn,
    enabled: Boolean(config.sentryDsn),
  });

  app.use(pinoHttp({ logger }));
  app.use(cookieParser());
  app.use(json({ limit: '2mb' }));
  app.enableCors({
    origin: config.corsOrigins,
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.useStaticAssets(join(process.cwd(), config.uploadDir), {
    prefix: '/uploads/',
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Ecommerce API')
    .setDescription('API for storefront and admin apps')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  await app.listen(config.port);
  Logger.log(`API listening on http://localhost:${config.port}`, 'Bootstrap');
}

void bootstrap();
