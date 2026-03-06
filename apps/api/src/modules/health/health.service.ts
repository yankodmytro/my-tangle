import { Inject, Injectable } from '@nestjs/common';
import type { HealthStatus } from '@ecommerce/shared-types';
import Redis from 'ioredis';
import { PrismaService } from '../database/prisma.service';
import { REDIS_CLIENT } from '../queue/queue.constants';

@Injectable()
export class HealthService {
  constructor(
    @Inject(PrismaService) private readonly prisma: PrismaService,
    @Inject(REDIS_CLIENT) private readonly redis: Redis
  ) {}

  async check(): Promise<HealthStatus> {
    let database: HealthStatus['database'] = 'up';
    let redis: HealthStatus['redis'] = 'up';

    try {
      await this.prisma.$queryRaw`SELECT 1`;
    } catch {
      database = 'down';
    }

    try {
      await this.redis.ping();
    } catch {
      redis = 'down';
    }

    return {
      status: database === 'up' && redis === 'up' ? 'ok' : 'error',
      database,
      redis,
      timestamp: new Date().toISOString()
    };
  }
}
