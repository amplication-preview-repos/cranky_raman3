import { Pdf as TPdf } from "../api/pdf/Pdf";

export const PDF_TITLE_FIELD = "filename";

export const PdfTitle = (record: TPdf): string => {
  return record.filename?.toString() || String(record.id);
};
