import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ScreenshotListRelationFilter } from "../screenshot/ScreenshotListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PdfWhereInput = {
  filename?: StringNullableFilter;
  id?: StringFilter;
  screenshots?: ScreenshotListRelationFilter;
  uploadDate?: DateTimeNullableFilter;
  url?: StringNullableFilter;
};
