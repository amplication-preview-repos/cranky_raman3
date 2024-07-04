import { PdfWhereUniqueInput } from "../pdf/PdfWhereUniqueInput";

export type ScreenshotUpdateInput = {
  pdf?: PdfWhereUniqueInput | null;
  screenshotUrl?: string | null;
};
