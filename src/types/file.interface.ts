export interface FileDto {
  id: number;
  userId: number;
  fileName: string;
  filePath?: string | null;
  extractedText?: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}
