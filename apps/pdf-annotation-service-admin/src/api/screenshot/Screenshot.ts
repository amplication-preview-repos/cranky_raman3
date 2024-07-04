import { Pdf } from "../pdf/Pdf";

export type Screenshot = {
  createdAt: Date;
  id: string;
  pdf?: Pdf | null;
  screenshotUrl: string | null;
  updatedAt: Date;
};
