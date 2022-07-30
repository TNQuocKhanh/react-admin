import React from "react";
import { Admin, Resource } from "react-admin";
import dataProvider from "./dataProvider";
import { httpClient, authProvider } from "./Auth";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import ProductIcon from "@mui/icons-material/GppGood";

import ProductList, {
  ProductCreate,
  ProductEdit,
} from "./components/ProductList";
import CategoryList, {
  CategoryCreate,
  CategoryEdit,
} from "./components/CategoryList";
import UserList, { UserCreate, UserEdit } from "./components/UserList";

import { i18nProvider } from "./i18nProvider";
import { MyLayout } from "./components/MyLayout";
import Dashboard from "./components/Dashboard";

const API_URL = "http://localhost:3000";

function App() {
  // const translate = useTranslate();
  // console.log(translate("resources.category.title"));

  // const locale = i18nProvider.getLocale();
  // console.log(locale);

  return (
    <Admin
      dashboard={Dashboard}
      dataProvider={dataProvider(API_URL, httpClient)}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      layout={MyLayout}
    >
      {(role) => {
        // console.log(translate("resources.category.name"));

        return [
          <Resource
            name="categories"
            list={CategoryList}
            edit={CategoryEdit}
            create={role === "1" ? CategoryCreate : null}
            icon={PostIcon}
          />,
          <Resource
            name="products"
            list={ProductList}
            edit={ProductEdit}
            create={role === "1" ? ProductCreate : null}
            icon={ProductIcon}
          />,
          role === "1" ? (
            <Resource
              name="users"
              list={UserList}
              create={UserCreate}
              edit={UserEdit}
              icon={UserIcon}
            />
          ) : null,
          // console.log("role --> ", role),
        ];
      }}
    </Admin>
  );
}

export default App;
