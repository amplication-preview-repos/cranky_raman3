import { ScreenshotWhereInput } from "./ScreenshotWhereInput";
import { ScreenshotOrderByInput } from "./ScreenshotOrderByInput";

export type ScreenshotFindManyArgs = {
  where?: ScreenshotWhereInput;
  orderBy?: Array<ScreenshotOrderByInput>;
  skip?: number;
  take?: number;
};
