import { Module } from '@nestjs/common';
import { LocalStorageAdapter } from './local-storage.adapter';
import { StorageController } from './storage.controller';
import { StorageService } from './storage.service';

@Module({
  controllers: [StorageController],
  providers: [LocalStorageAdapter, StorageService],
  exports: [StorageService, LocalStorageAdapter],
})
export class StorageModule {}
