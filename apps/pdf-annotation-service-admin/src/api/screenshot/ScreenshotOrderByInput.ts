import { SortOrder } from "../../util/SortOrder";

export type ScreenshotOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  pdfId?: SortOrder;
  screenshotUrl?: SortOrder;
  updatedAt?: SortOrder;
};
