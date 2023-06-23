import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

const PublicRoutes = () => {
  const { userData } = useContext(UserContext);

  return !userData ? <Outlet /> : <Navigate to="/home" />;
};

export default PublicRoutes;
