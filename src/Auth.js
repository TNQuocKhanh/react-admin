import decodeJwt from "jwt-decode";

const API_URL = "http://localhost:3000";

export const httpClient = () => {
  const { token } = JSON.parse(localStorage.getItem("auth")) || {};
  //   console.log("TOKEN", token);
  return { Authorization: `Bearer ${token}` };
};

export const authProvider = {
  // authentication
  login: ({ username, password }) => {
    // console.log(username, password);
    const request = new Request(API_URL + "/users/login", {
      method: "POST",
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    // console.log(request);
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        // console.log(response);
        return response.json();
      })
      .then((auth) => {
        const decodeToken = decodeJwt(auth.token);
        localStorage.setItem(
          "auth",
          JSON.stringify({ ...auth, fullName: username })
        );
        localStorage.setItem("permissions", decodeToken.role);
      })
      .catch(() => {
        throw new Error("Network error");
      });
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("auth");
      return Promise.reject();
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem("auth")
      ? Promise.resolve()
      : Promise.reject({ message: "login required" }),
  logout: () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("permissions");
    return Promise.resolve();
  },
  getIdentity: () => {
    try {
      const { id, fullName, avatar } = JSON.parse(localStorage.getItem("auth"));
      return Promise.resolve({ id, fullName, avatar });
    } catch (error) {
      return Promise.reject(error);
    }
  },
  //   getPermissions: (params) => Promise.resolve(),
  getPermissions: () => {
    const role = localStorage.getItem("permissions");
    // console.log("Role", role);
    return role ? Promise.resolve(role) : Promise.reject();
  },
};
