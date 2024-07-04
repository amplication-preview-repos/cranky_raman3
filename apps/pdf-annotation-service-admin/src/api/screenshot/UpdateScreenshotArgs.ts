import { ScreenshotWhereUniqueInput } from "./ScreenshotWhereUniqueInput";
import { ScreenshotUpdateInput } from "./ScreenshotUpdateInput";

export type UpdateScreenshotArgs = {
  where: ScreenshotWhereUniqueInput;
  data: ScreenshotUpdateInput;
};
