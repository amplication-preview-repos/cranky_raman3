import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { PdfTitle } from "../pdf/PdfTitle";

export const ScreenshotEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="pdf.id" reference="Pdf" label="PDF">
          <SelectInput optionText={PdfTitle} />
        </ReferenceInput>
        <TextInput label="screenshot_url" source="screenshotUrl" />
      </SimpleForm>
    </Edit>
  );
};
