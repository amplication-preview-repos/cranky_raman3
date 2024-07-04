import * as graphql from "@nestjs/graphql";
import { CaptureScreenshotDto } from "../screenshotModule/CaptureScreenshotDto";
import { ScreenshotListDto } from "../screenshotModule/ScreenshotListDto";
import { ProcessScreenshotsDto } from "../screenshotModule/ProcessScreenshotsDto";
import { ScreenshotModuleService } from "./screenshotmodule.service";

export class ScreenshotModuleResolver {
  constructor(protected readonly service: ScreenshotModuleService) {}

  @graphql.Mutation(() => String)
  async CaptureScreenshot(
    @graphql.Args()
    args: CaptureScreenshotDto
  ): Promise<string> {
    return this.service.CaptureScreenshot(args);
  }

  @graphql.Query(() => ScreenshotListDto)
  async ListScreenshots(
    @graphql.Args()
    args: string
  ): Promise<ScreenshotListDto> {
    return this.service.ListScreenshots(args);
  }

  @graphql.Mutation(() => String)
  async ProcessScreenshots(
    @graphql.Args()
    args: ProcessScreenshotsDto
  ): Promise<string> {
    return this.service.ProcessScreenshots(args);
  }
}
