import {createBrowserRouter} from "react-router-dom";
import SignIn from "./views/login-view";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import DashboardLayout from "./components/DashboardLayout";
import DashboardPage from "./components/page-component/dash-board-page";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardLayout />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

export default router;
