import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import AppLayout from "./layouts/global/AppLayout";
import Contribution from "./features/dashboard/menu/Contribution";
import { checkIsLoggedInLoader } from "./App";
import Overview from "./features/dashboard/menu/Overview";
import Contributors from "./features/dashboard/menu/Contributors";
import { Settings } from "lucide-react";
import Inbox from "./features/dashboard/menu/Inbox";
import Help from "./features/dashboard/support/help";
import Report from "./features/dashboard/support/report";
import Transaction from "./features/dashboard/payment/Transaction";
import PrivateChat from "./features/dashboard/chats/PrivateChat";
import GroupChat from "./features/dashboard/chats/GroupChat";
import Transfer from "./features/dashboard/payment/Transfer";
import Withdrawal from "./features/dashboard/payment/Withdrawal";

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
        path: "inbox",
        element: <Inbox />,
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
        path: "card/transactions",
        element: <Transaction />,
      },
      {
        path: "card/transfer",
        element: <Transfer />,
      },
      {
        path: "card/withdraw",
        element: <Withdrawal />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "report",
        element: <Report />,
      },
      {
        path: "chat/private",
        element: <PrivateChat />,
      },
      {
        path: "chat/group",
        element: <GroupChat />,
      },
    ],
  },
]);

export default router;
