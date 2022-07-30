import { Layout } from "react-admin";
import { MyMenu } from "./MyMenu";
import { MyAppBar } from "./MyAppBar";

export const MyLayout = (props) => {
  return <Layout {...props} menu={MyMenu} appBar={MyAppBar} />;
};
