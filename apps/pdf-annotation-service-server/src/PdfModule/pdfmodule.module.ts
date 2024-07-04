import { Module } from "@nestjs/common";
import { PdfModuleService } from "./pdfmodule.service";
import { PdfModuleController } from "./pdfmodule.controller";
import { PdfModuleResolver } from "./pdfmodule.resolver";

@Module({
  controllers: [PdfModuleController],
  providers: [PdfModuleService, PdfModuleResolver],
  exports: [PdfModuleService],
})
export class PdfModuleModule {}
