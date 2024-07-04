import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PDF_TITLE_FIELD } from "./PdfTitle";

export const PdfShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="filename" source="filename" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="upload_date" source="uploadDate" />
        <TextField label="url" source="url" />
        <ReferenceManyField
          reference="Screenshot"
          target="pdfId"
          label="Screenshots"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="PDF" source="pdf.id" reference="Pdf">
              <TextField source={PDF_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="screenshot_url" source="screenshotUrl" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
