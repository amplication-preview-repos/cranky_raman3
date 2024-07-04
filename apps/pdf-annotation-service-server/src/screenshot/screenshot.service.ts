import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScreenshotServiceBase } from "./base/screenshot.service.base";

@Injectable()
export class ScreenshotService extends ScreenshotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
