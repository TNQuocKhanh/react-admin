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
  EditButton,
  Create,
  useTranslate,
  useCreate,
  SaveButton,
} from "react-admin";

const UserFilter = (props) => (
  <Filter {...props}>
    <SearchInput
      placeholder="Enter username"
      source="username"
      resettable
      alwaysOn
    />
  </Filter>
);

export const UserEdit = (props) => {
  const translate = useTranslate();

  return (
    <Edit {...props} title={translate("resources.user.updateNew")}>
      <SimpleForm>
        <TextInput disabled source="id" label={"resources.user.fields.id"} />
        <TextInput
          source="username"
          label={translate("resources.user.fields.username")}
        />
        <TextInput
          source="email"
          label={translate("resources.user.fields.email")}
        />
        <SaveButton onClick={console.log("ABCD")} />
      </SimpleForm>
    </Edit>
  );
};

export const UserCreate = (props) => {
  const [create] = useCreate();
  const userSave = (data) => {
    // console.log(data);
    create("signup", { data });
  };

  const translate = useTranslate();
  return (
    <Create {...props} title={translate("resources.user.addNew")}>
      <SimpleForm onSubmit={userSave}>
        <TextInput
          source="email"
          label={translate("resources.user.fields.email")}
        />
        <TextInput
          source="username"
          label={translate("resources.user.fields.username")}
        />
        <TextInput
          source="password"
          label={translate("resources.user.fields.password")}
        />
      </SimpleForm>
    </Create>
  );
};

const UserList = (props) => {
  const translate = useTranslate();
  return (
    <List
      {...props}
      filters={<UserFilter />}
      title={translate("resources.user.title")}
    >
      <Datagrid>
        <TextField source="id" label={translate("resources.user.fields.id")} />
        <TextField
          source="email"
          label={translate("resources.user.fields.email")}
        />
        <TextField
          source="username"
          label={translate("resources.user.fields.username")}
        />
        <TextField
          source="role"
          label={translate("resources.user.fields.role")}
        />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default UserList;
