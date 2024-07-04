import { Injectable } from "@nestjs/common";
import { CaptureScreenshotDto } from "../screenshotModule/CaptureScreenshotDto";
import { ScreenshotListDto } from "../screenshotModule/ScreenshotListDto";
import { ProcessScreenshotsDto } from "../screenshotModule/ProcessScreenshotsDto";

@Injectable()
export class ScreenshotModuleService {
  constructor() {}
  async CaptureScreenshot(args: CaptureScreenshotDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async ListScreenshots(args: string): Promise<ScreenshotListDto> {
    throw new Error("Not implemented");
  }
  async ProcessScreenshots(args: ProcessScreenshotsDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
