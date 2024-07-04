import { ScreenshotUpdateManyWithoutPdfsInput } from "./ScreenshotUpdateManyWithoutPdfsInput";

export type PdfUpdateInput = {
  filename?: string | null;
  screenshots?: ScreenshotUpdateManyWithoutPdfsInput;
  uploadDate?: Date | null;
  url?: string | null;
};
