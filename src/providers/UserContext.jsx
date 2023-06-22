import { useState } from "react";
import { createContext } from "react"
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({})

const UserProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const userRegister = async (formData) => {
        try {
          const response = await api.post("/users", formData);
          toast.success("Conta criada com sucesso!", {
            autoClose: 2000,
          });
          navigate("/")
        } catch (error) {
          toast.error(`${error.response.data.message}`);
        }
    };

    const userLogin = async (formData) => {
        try {
          setIsLoading(true);
          const response = await api.post("/sessions", formData);
          localStorage.setItem(
            "KENZIEHUB@TOKEN",
            JSON.stringify(response.data.token)
          );
          localStorage.setItem(
            "KENZIEHUB@USERID",
            JSON.stringify(response.data.user.id)
          );
          setUserData(response.data.user);
          toast.success("Login efetuado com sucesso!", {
            autoClose: 2000,
          });
          navigate("/home")
        } catch (error) {
          toast.error(`${error.response.data.message}`);
        } finally {
          setIsLoading(false);
        }
      };

      const userLogout = () => {
        toast.success("Logout efetuado com sucesso!", {
          autoClose: 2000,
        });
        localStorage.clear();
        setUserData(null);
        navigate("/");
      };


    return (
        <UserContext.Provider value={{userData, setUserData, userRegister, userLogin, userLogout, isLoading, setIsLoading}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider