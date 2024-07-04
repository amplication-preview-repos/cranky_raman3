import * as graphql from "@nestjs/graphql";
import { ScreenshotResolverBase } from "./base/screenshot.resolver.base";
import { Screenshot } from "./base/Screenshot";
import { ScreenshotService } from "./screenshot.service";

@graphql.Resolver(() => Screenshot)
export class ScreenshotResolver extends ScreenshotResolverBase {
  constructor(protected readonly service: ScreenshotService) {
    super(service);
  }
}
