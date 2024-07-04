import { ScreenshotCreateNestedManyWithoutPdfsInput } from "./ScreenshotCreateNestedManyWithoutPdfsInput";

export type PdfCreateInput = {
  filename?: string | null;
  screenshots?: ScreenshotCreateNestedManyWithoutPdfsInput;
  uploadDate?: Date | null;
  url?: string | null;
};
