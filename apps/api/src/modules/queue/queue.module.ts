import { Global, Module } from '@nestjs/common';
import { Queue } from 'bullmq';
import Redis from 'ioredis';
import { AppConfigService } from '../app-config/app-config.service';
import { DemoQueueService } from './demo-queue.service';
import { DEMO_QUEUE, REDIS_CLIENT } from './queue.constants';

function getRedisConnection(url: string) {
  const parsed = new URL(url);

  return {
    host: parsed.hostname,
    port: Number(parsed.port || 6379),
    username: parsed.username || undefined,
    password: parsed.password || undefined,
    maxRetriesPerRequest: null as null
  };
}

@Global()
@Module({
  providers: [
    {
      provide: REDIS_CLIENT,
      inject: [AppConfigService],
      useFactory: (config: AppConfigService) => new Redis(config.redisUrl, { maxRetriesPerRequest: null })
    },
    {
      provide: DEMO_QUEUE,
      inject: [AppConfigService],
      useFactory: (config: AppConfigService) => new Queue('demo', { connection: getRedisConnection(config.redisUrl) })
    },
    DemoQueueService,
    {
      provide: 'REDIS_CONNECTION_OPTIONS',
      inject: [AppConfigService],
      useFactory: (config: AppConfigService) => getRedisConnection(config.redisUrl)
    }
  ],
  exports: [REDIS_CLIENT, DEMO_QUEUE, DemoQueueService, 'REDIS_CONNECTION_OPTIONS']
})
export class QueueModule {}
