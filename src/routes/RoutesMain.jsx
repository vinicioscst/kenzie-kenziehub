import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import TechProvider from "../providers/TechContext";
import ProtectedRoutes from "../components/ProtectecRoutes";
import PublicRoutes from "../components/PublicRoutes";

const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={
            <TechProvider>
              <Home />
            </TechProvider>
          }
        />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
