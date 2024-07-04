import * as graphql from "@nestjs/graphql";
import { PdfPagesDto } from "../pdfModule/PdfPagesDto";
import { UploadPdfDto } from "../pdfModule/UploadPdfDto";
import { PdfModuleService } from "./pdfmodule.service";

export class PdfModuleResolver {
  constructor(protected readonly service: PdfModuleService) {}

  @graphql.Query(() => PdfPagesDto)
  async FetchPages(
    @graphql.Args()
    args: string
  ): Promise<PdfPagesDto> {
    return this.service.FetchPages(args);
  }

  @graphql.Mutation(() => String)
  async UploadPdf(
    @graphql.Args()
    args: UploadPdfDto
  ): Promise<string> {
    return this.service.UploadPdf(args);
  }
}
