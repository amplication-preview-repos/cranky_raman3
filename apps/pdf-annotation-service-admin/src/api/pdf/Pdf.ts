import { Screenshot } from "../screenshot/Screenshot";

export type Pdf = {
  createdAt: Date;
  filename: string | null;
  id: string;
  screenshots?: Array<Screenshot>;
  updatedAt: Date;
  uploadDate: Date | null;
  url: string | null;
};
