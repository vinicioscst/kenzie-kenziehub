import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import UserProvider from "../providers/UserContext";

const RoutesMain = () => {
  return (
    <UserProvider>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </UserProvider>
  );
};

export default RoutesMain;
