import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Overview from "./features/dashboard/overview/Overview";
import Settings from "./features/dashboard/settings/Settings";
import Contributors from "./features/dashboard/users/Contributors";
import AppLayout from "./layouts/global/AppLayout";
import Contribution from "./features/dashboard/contributions/Contribution";
import { checkIsLoggedInLoader } from "./App";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
        loader: checkIsLoggedInLoader,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "/resetPassword/:resetToken",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: checkIsLoggedInLoader,
    shouldRevalidate: () => true,
    children: [
      {
        path: "",
        element: <Overview />,
      },
      {
        path: "contributors",
        element: <Contributors />,
      },
      {
        path: "contributions",
        element: <Contribution />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;
