import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home"


const RoutesMain = ({userData, setUserData}) => {
    return (
        <Routes>
            <Route path="/" element={<Login userData={userData} setUserData={setUserData}/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home userData={userData} setUserData={setUserData}/>} />
        </Routes>
    )
}

export default RoutesMain