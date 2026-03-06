export interface StorageProvider {
  save(file: Express.Multer.File): Promise<{ filename: string; url: string }>;
}
