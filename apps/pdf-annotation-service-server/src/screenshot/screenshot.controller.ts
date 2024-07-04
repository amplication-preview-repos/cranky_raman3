import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScreenshotService } from "./screenshot.service";
import { ScreenshotControllerBase } from "./base/screenshot.controller.base";

@swagger.ApiTags("screenshots")
@common.Controller("screenshots")
export class ScreenshotController extends ScreenshotControllerBase {
  constructor(protected readonly service: ScreenshotService) {
    super(service);
  }
}
