import { Module } from "@nestjs/common";
import { ScreenshotModuleBase } from "./base/screenshot.module.base";
import { ScreenshotService } from "./screenshot.service";
import { ScreenshotController } from "./screenshot.controller";
import { ScreenshotResolver } from "./screenshot.resolver";

@Module({
  imports: [ScreenshotModuleBase],
  controllers: [ScreenshotController],
  providers: [ScreenshotService, ScreenshotResolver],
  exports: [ScreenshotService],
})
export class ScreenshotModule {}
