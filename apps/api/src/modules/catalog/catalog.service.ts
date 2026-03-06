import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { DemoQueueService } from '../queue/demo-queue.service';

@Injectable()
export class CatalogService {
  constructor(
    @Inject(PrismaService) private readonly prisma: PrismaService,
    @Inject(DemoQueueService) private readonly demoQueue: DemoQueueService
  ) {}

  async getProducts() {
    const products = await this.prisma.product.findMany({
      include: { media: true },
      orderBy: { createdAt: 'desc' },
      take: 6
    });

    return products.map((product) => ({
      id: product.id,
      name: product.name,
      slug: product.slug,
      description: product.description,
      price: Number(product.price),
      currency: product.currency
    }));
  }

  async captureLead(payload: { name: string; email: string }) {
    await this.demoQueue.enqueueLead(payload);
    return { success: true };
  }
}
