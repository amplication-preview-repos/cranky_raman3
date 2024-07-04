import { SortOrder } from "../../util/SortOrder";

export type PdfOrderByInput = {
  createdAt?: SortOrder;
  filename?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  uploadDate?: SortOrder;
  url?: SortOrder;
};
