import englishMessage from "ra-language-english";

const vi = {
  ...englishMessage,
  resources: {
    category: {
      name: "Categories",
      fields: {
        id: "id",
        name: "Category",
      },
      title: "List of categories",
      addNew: "Create a new category",
      updateNew: "Update category info",
    },
    product: {
      name: "Products",
      fields: {
        id: "id",
        categoryId: "CategoryId",
        name: "Name",
        price: "Price",
        description: "Description",
      },
      title: "List of products",
      addNew: "Create a new product",
      updateNew: "Update product info",
    },
    user: {
      name: "Users",
      fields: {
        id: "id",
        username: "Username",
        password: "Password",
        email: "Email",
        role: "Role",
      },
      title: "List of users",
      addNew: "Create a new user",
      updateNew: "Update user info",
    },
  },
};

export default vi;
