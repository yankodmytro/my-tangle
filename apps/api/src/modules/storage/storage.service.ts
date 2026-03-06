import { Inject, Injectable } from '@nestjs/common';
import { LocalStorageAdapter } from './local-storage.adapter';

@Injectable()
export class StorageService {
  constructor(@Inject(LocalStorageAdapter) private readonly storage: LocalStorageAdapter) {}

  save(file: Express.Multer.File) {
    return this.storage.save(file);
  }
}
