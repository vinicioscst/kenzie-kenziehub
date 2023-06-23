import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../providers/UserContext"


const ProtectedRoutes = () => {
    const { userData } = useContext(UserContext)

    return userData ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes