import Cookies from "js-cookie";
import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../components/layout/AppLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Settings from "../pages/settings/page";

const userLogged = () => {
  if (
    Cookies.get("accessToken") &&
    Cookies.get("user") &&
    Cookies.get("refreshToken")
  ) {
    return true;
  } else {
    return true; //false
  }
};

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => (userLogged() ? null : redirect("/login")),
    async lazy() {
      const Layout = await import("../components/layout/AppLayout");
      return { Component: Layout.default };
    },
    element: <Layout />,
    children: [
      {
        index: true,
        loader: () => redirect("/dashboard"),
      },
      {
        path: "/dashboard",
        element: (
          // <ProtectedRoutes>
          <Dashboard />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/login",
    async lazy() {
      const Login = await import("../pages/Login");
      return { Component: Login.default };
    },
  },
]);
