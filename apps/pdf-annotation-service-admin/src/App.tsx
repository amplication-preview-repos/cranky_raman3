import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ScreenshotList } from "./screenshot/ScreenshotList";
import { ScreenshotCreate } from "./screenshot/ScreenshotCreate";
import { ScreenshotEdit } from "./screenshot/ScreenshotEdit";
import { ScreenshotShow } from "./screenshot/ScreenshotShow";
import { PdfList } from "./pdf/PdfList";
import { PdfCreate } from "./pdf/PdfCreate";
import { PdfEdit } from "./pdf/PdfEdit";
import { PdfShow } from "./pdf/PdfShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PDFAnnotationService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Screenshot"
          list={ScreenshotList}
          edit={ScreenshotEdit}
          create={ScreenshotCreate}
          show={ScreenshotShow}
        />
        <Resource
          name="Pdf"
          list={PdfList}
          edit={PdfEdit}
          create={PdfCreate}
          show={PdfShow}
        />
      </Admin>
    </div>
  );
};

export default App;
