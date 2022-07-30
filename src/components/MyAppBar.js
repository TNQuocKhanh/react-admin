import { LocalesMenuButton, AppBar } from "react-admin";
import { Typography } from "@mui/material";

export const MyAppBar = () => (
  <AppBar>
    <Typography flex="1" variant="h6" id="react-admin-title" />
    <LocalesMenuButton
      languages={[
        { locale: "en", name: "English" },
        { locale: "vi", name: "Việt Nam" },
      ]}
    />
  </AppBar>
);
