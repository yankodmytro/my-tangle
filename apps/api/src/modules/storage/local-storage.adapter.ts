import { Inject, Injectable } from '@nestjs/common';
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { AppConfigService } from '../app-config/app-config.service';
import { StorageProvider } from './storage.types';

@Injectable()
export class LocalStorageAdapter implements StorageProvider {
  constructor(@Inject(AppConfigService) private readonly config: AppConfigService) {}

  async save(file: Express.Multer.File) {
    await mkdir(this.config.uploadDir, { recursive: true });
    const filename = `${Date.now()}-${file.originalname.replace(/\s+/g, '-').toLowerCase()}`;
    const filepath = join(this.config.uploadDir, filename);
    await writeFile(filepath, file.buffer);

    return {
      filename,
      url: `${this.config.apiUrl}/uploads/${filename}`,
    };
  }
}
