import {useContext} from "react";
import {useStateContext} from "../contexts/context-provider";
import {Navigate, Outlet} from "react-router-dom";
import DashboardLayout from "./DashboardLayout";

export default function DefaultLayout() {
  const {user, token} = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }
  return <DashboardLayout />;
}
