import { Inject, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConnectionOptions, Queue, Worker } from 'bullmq';
import Redis from 'ioredis';
import { DEMO_QUEUE, REDIS_CLIENT } from './queue.constants';

@Injectable()
export class DemoQueueService implements OnModuleInit, OnModuleDestroy {
  private worker?: Worker;

  constructor(
    @Inject(DEMO_QUEUE) private readonly queue: Queue,
    @Inject(REDIS_CLIENT) private readonly redis: Redis,
    @Inject('REDIS_CONNECTION_OPTIONS') private readonly connection: ConnectionOptions
  ) {}

  async onModuleInit() {
    this.worker = new Worker(
      'demo',
      async (job) => {
        if (job.name === 'lead') {
          console.log('Processed lead', job.data);
        }
      },
      { connection: this.connection }
    );
  }

  async onModuleDestroy() {
    await this.worker?.close();
    await this.queue.close();
    await this.redis.quit();
  }

  enqueueLead(payload: { name: string; email: string }) {
    return this.queue.add('lead', payload);
  }
}
