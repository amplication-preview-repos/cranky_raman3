import { StringFilter } from "../../util/StringFilter";
import { PdfWhereUniqueInput } from "../pdf/PdfWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ScreenshotWhereInput = {
  id?: StringFilter;
  pdf?: PdfWhereUniqueInput;
  screenshotUrl?: StringNullableFilter;
};
