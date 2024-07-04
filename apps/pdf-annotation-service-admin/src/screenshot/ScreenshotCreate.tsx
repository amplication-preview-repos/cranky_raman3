import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { PdfTitle } from "../pdf/PdfTitle";

export const ScreenshotCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="pdf.id" reference="Pdf" label="PDF">
          <SelectInput optionText={PdfTitle} />
        </ReferenceInput>
        <TextInput label="screenshot_url" source="screenshotUrl" />
      </SimpleForm>
    </Create>
  );
};
