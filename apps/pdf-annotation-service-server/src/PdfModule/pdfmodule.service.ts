import { Injectable } from "@nestjs/common";
import { PdfPagesDto } from "../pdfModule/PdfPagesDto";
import { UploadPdfDto } from "../pdfModule/UploadPdfDto";

@Injectable()
export class PdfModuleService {
  constructor() {}
  async FetchPages(args: string): Promise<PdfPagesDto> {
    throw new Error("Not implemented");
  }
  async UploadPdf(args: UploadPdfDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
