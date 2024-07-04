import { PdfWhereUniqueInput } from "../pdf/PdfWhereUniqueInput";

export type ScreenshotCreateInput = {
  pdf?: PdfWhereUniqueInput | null;
  screenshotUrl?: string | null;
};
