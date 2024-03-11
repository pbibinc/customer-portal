import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/context-provider";

export default function GuestLayout() {
  const {user, token} = useStateContext();
  if (token) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
