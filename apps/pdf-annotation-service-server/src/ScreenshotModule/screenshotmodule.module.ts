import { Module } from "@nestjs/common";
import { ScreenshotModuleService } from "./screenshotmodule.service";
import { ScreenshotModuleController } from "./screenshotmodule.controller";
import { ScreenshotModuleResolver } from "./screenshotmodule.resolver";

@Module({
  controllers: [ScreenshotModuleController],
  providers: [ScreenshotModuleService, ScreenshotModuleResolver],
  exports: [ScreenshotModuleService],
})
export class ScreenshotModuleModule {}
