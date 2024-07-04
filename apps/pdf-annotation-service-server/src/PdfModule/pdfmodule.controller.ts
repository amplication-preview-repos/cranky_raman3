import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PdfModuleService } from "./pdfmodule.service";
import { UploadPdfDto } from "../pdfModule/UploadPdfDto";
import { PdfPagesDto } from "../pdfModule/PdfPagesDto";

@swagger.ApiTags("pdfModules")
@common.Controller("pdfModules")
export class PdfModuleController {
  constructor(protected readonly service: PdfModuleService) {}

  @common.Get("/pdf/:id/pages")
  @swagger.ApiOkResponse({
    type: PdfPagesDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchPages(
    @common.Body()
    body: UploadPdfDto
  ): Promise<PdfPagesDto> {
        return this.service.FetchPages(body);
      }

  @common.Post("/upload")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadPdf(
    @common.Body()
    body: UploadPdfDto
  ): Promise<string> {
        return this.service.UploadPdf(body);
      }
}
