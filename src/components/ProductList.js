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
  SelectInput,
  Create,
  EditButton,
  ReferenceField,
  usePermissions,
  useTranslate,
} from "react-admin";

const ProductFilter = (props) => (
  <Filter {...props}>
    <SearchInput
      placeholder="Enter name ..."
      source="name"
      resettable
      alwaysOn
    />
  </Filter>
);

export const ProductEdit = (props) => {
  const transform = (data) => {
    return { ...data, price: Number(data.price) };
  };

  const translate = useTranslate();

  return (
    <Edit
      {...props}
      transform={transform}
      title={translate("resources.product.updateNew")}
    >
      <SimpleForm>
        <TextInput
          disabled
          source="id"
          label={translate("resources.product.fields.id")}
        />
        <SelectInput
          source="categoryId"
          label={translate("resources.product.fields.categoryId")}
          choices={[
            { id: 1, name: "Meat" },
            { id: 2, name: "Fish" },
            { id: 3, name: "Fruit" },
            { id: 4, name: "Vegetables" },
          ]}
        />
        <TextInput
          source="name"
          label={translate("resources.product.fields.name")}
        />
        <TextInput
          source="price"
          label={translate("resources.product.fields.price")}
        />
        <TextInput
          source="description"
          label={translate("resources.product.fields.description")}
        />
      </SimpleForm>
    </Edit>
  );
};

export const ProductCreate = (props) => {
  const transform = (data) => {
    console.log("data=>>>", data);
    return {
      ...data,
      categoryId: Number(data.categoryId),
      price: Number(data.price),
    };
  };

  const translate = useTranslate();

  return (
    <Create
      {...props}
      transform={transform}
      title={translate("resources.product.addNew")}
    >
      <SimpleForm>
        <SelectInput
          source="categoryId"
          label={translate("resources.product.fields.categoryId")}
          choices={[
            { id: 1, name: "Meat" },
            { id: 2, name: "Fish" },
            { id: 3, name: "Fruit" },
            { id: 4, name: "Vegetables" },
          ]}
        />
        <TextInput
          source="name"
          label={translate("resources.product.fields.name")}
        />
        <TextInput
          source="price"
          label={translate("resources.product.fields.price")}
        />
        <TextInput
          source="description"
          label={translate("resources.product.fields.description")}
        />
      </SimpleForm>
    </Create>
  );
};

const ProductList = (props) => {
  const { permissions } = usePermissions();

  const translate = useTranslate();

  return (
    <List
      {...props}
      filters={<ProductFilter />}
      title={translate("resources.product.title")}
    >
      <Datagrid>
        <TextField
          source="id"
          label={translate("resources.product.fields.id")}
        />
        <ReferenceField
          label={translate("resources.product.fields.categoryId")}
          source="categoryId"
          reference="categories"
        >
          <TextField source="id" />
        </ReferenceField>
        <TextField
          source="name"
          label={translate("resources.product.fields.name")}
        />
        <TextField
          source="price"
          label={translate("resources.product.fields.price")}
        />
        <TextField
          source="description"
          label={translate("resources.product.fields.description")}
        />
        {permissions === "1" && <EditButton />}
      </Datagrid>
    </List>
  );
};

export default ProductList;
