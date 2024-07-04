import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PDF_TITLE_FIELD } from "../pdf/PdfTitle";

export const ScreenshotShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="PDF" source="pdf.id" reference="Pdf">
          <TextField source={PDF_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="screenshot_url" source="screenshotUrl" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
