import vietnameseMessage from "ra-language-vietnamese";

const vi = {
  ...vietnameseMessage,
  resources: {
    category: {
      name: "Loại sản phẩm",
      fields: {
        id: "Mã loại",
        name: "Tên loại",
      },
      title: "Danh sách loại sản phẩm",
      addNew: "Tạo mới loại sản phẩm",
      updateNew: "Cập nhật thông tin loại sản phẩm",
    },
    product: {
      name: "Sản phẩm",
      fields: {
        id: "Mã sản phẩm",
        categoryId: "Loại sản phẩm",
        name: "Tên sản phẩm",
        price: "Giá",
        description: "Mô tả",
      },
      title: "Danh sách sản phẩm",
      addNew: "Tạo mới sản phẩm",
      updateNew: "Cập nhật thông tin sản phẩm",
    },
    user: {
      name: "Người dùng",
      fields: {
        id: "Mã người dùng",
        username: "Tên đăng nhập",
        email: "Email",
        password: "Mật khẩu",
        role: "Vai trò",
      },
      title: "Danh sách người dùng",
      addNew: "Tạo mới người dùng",
      updateNew: "Cập nhật thông tin người dùng",
    },
  },
};

export default vi;
