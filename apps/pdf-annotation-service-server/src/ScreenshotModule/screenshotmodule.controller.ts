import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ScreenshotModuleService } from "./screenshotmodule.service";
import { ProcessScreenshotsDto } from "../screenshotModule/ProcessScreenshotsDto";
import { ScreenshotListDto } from "../screenshotModule/ScreenshotListDto";

@swagger.ApiTags("screenshotModules")
@common.Controller("screenshotModules")
export class ScreenshotModuleController {
  constructor(protected readonly service: ScreenshotModuleService) {}

  @common.Post("/capture")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CaptureScreenshot(
    @common.Body()
    body: ProcessScreenshotsDto
  ): Promise<string> {
        return this.service.CaptureScreenshot(body);
      }

  @common.Get("/pdf/:id/screenshots")
  @swagger.ApiOkResponse({
    type: ScreenshotListDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ListScreenshots(
    @common.Body()
    body: ProcessScreenshotsDto
  ): Promise<ScreenshotListDto> {
        return this.service.ListScreenshots(body);
      }

  @common.Post("/process")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProcessScreenshots(
    @common.Body()
    body: ProcessScreenshotsDto
  ): Promise<string> {
        return this.service.ProcessScreenshots(body);
      }
}
