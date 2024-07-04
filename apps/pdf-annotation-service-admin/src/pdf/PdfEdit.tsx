import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { ScreenshotTitle } from "../screenshot/ScreenshotTitle";

export const PdfEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
