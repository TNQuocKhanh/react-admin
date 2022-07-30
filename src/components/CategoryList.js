import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Filter,
  SearchInput,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  EditButton,
  usePermissions,
  useTranslate,
} from "react-admin";

const CategoryFilter = (props) => (
  <Filter {...props}>
    <SearchInput
      placeholder="Enter name ..."
      source="name"
      resettable
      alwaysOn
    />
  </Filter>
);

export const CategoryEdit = (props) => {
  const translate = useTranslate();

  return (
    <Edit {...props} title={translate("resources.category.updateNew")}>
      <SimpleForm>
        <TextInput
          disabled
          source="id"
          label={translate("resources.user.fields.id")}
        />
        <TextInput
          source="name"
          label={translate("resources.category.fields.name")}
        />
      </SimpleForm>
    </Edit>
  );
};

export const CategoryCreate = (props) => {
  const translate = useTranslate();

  return (
    <Create {...props} title={translate("resources.category.addNew")}>
      <SimpleForm>
        <TextInput
          source="name"
          label={translate("resources.category.fields.name")}
        />
      </SimpleForm>
    </Create>
  );
};

const CategoryList = (props) => {
  const { isLoading, permissions } = usePermissions();
  //   console.log(usePermissions());
  const translate = useTranslate();
  return isLoading ? null : (
    // console.log("Waiting for permision...")
    <List
      title={translate("resources.category.title")}
      {...props}
      filters={<CategoryFilter />}
    >
      <Datagrid>
        <TextField
          source="id"
          label={translate("resources.category.fields.id")}
        />
        <TextField
          source="name"
          label={translate("resources.category.fields.name")}
        />
        {permissions === "1" && <EditButton />}
      </Datagrid>
    </List>
  );
};

export default CategoryList;
