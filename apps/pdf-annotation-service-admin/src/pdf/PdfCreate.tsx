import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { ScreenshotTitle } from "../screenshot/ScreenshotTitle";

export const PdfCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="filename" source="filename" />
        <ReferenceArrayInput
          source="screenshots"
          reference="Screenshot"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScreenshotTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="upload_date" source="uploadDate" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
