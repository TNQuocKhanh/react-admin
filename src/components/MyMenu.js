import { Menu, useTranslate } from "react-admin";

import BookIcon from "@mui/icons-material/Book";
import PeopleIcon from "@mui/icons-material/People";
import LabelIcon from "@mui/icons-material/Label";

export const MyMenu = () => {
  const translate = useTranslate();

  const role = localStorage.getItem("permissions");

  return (
    <Menu>
      <Menu.DashboardItem />
      <Menu.Item
        to="/categories"
        primaryText={translate("resources.category.name")}
        leftIcon={<LabelIcon />}
      />
      <Menu.Item
        to="/products"
        primaryText={translate("resources.product.name")}
        leftIcon={<BookIcon />}
      />
      {role === "1" ? (
        <Menu.Item
          to="/users"
          primaryText={translate("resources.user.name")}
          leftIcon={<PeopleIcon />}
        />
      ) : null}
    </Menu>
  );
};
