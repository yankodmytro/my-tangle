import { Module } from '@nestjs/common';
import { AppConfigModule } from './app-config/app-config.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { CatalogModule } from './catalog/catalog.module';
import { DatabaseModule } from './database/database.module';
import { HealthModule } from './health/health.module';
import { OrdersModule } from './orders/orders.module';
import { QueueModule } from './queue/queue.module';
import { StorageModule } from './storage/storage.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AppConfigModule,
    DatabaseModule,
    AuthModule,
    UsersModule,
    CatalogModule,
    CartModule,
    OrdersModule,
    QueueModule,
    StorageModule,
    HealthModule
  ]
})
export class AppModule {}
