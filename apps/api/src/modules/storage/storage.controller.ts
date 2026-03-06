import { Controller, Inject, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { StorageService } from './storage.service';

@Controller('storage')
export class StorageController {
  constructor(@Inject(StorageService) private readonly storageService: StorageService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { storage: memoryStorage() }))
  upload(@UploadedFile() file: Express.Multer.File) {
    return this.storageService.save(file);
  }
}
