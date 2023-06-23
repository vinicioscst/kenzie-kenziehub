import { useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isRequestLoading, setIsRequestLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("KENZIEHUB@TOKEN"));

    const loadUser = async () => {
      try {
        setLoading(true)
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(data)
        navigate(currentPath)
      } catch (error) {
        toast.error(`${error.data.message}`);
      } finally {
        setLoading(false)
      }};

    if(token) {
      loadUser()
    }
  }, []);

  const userRegister = async (formData) => {
    try {
      await api.post("/users", formData);
      toast.success("Conta criada com sucesso!", {
        autoClose: 2000,
      });
      navigate("/");
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };

  const userLogin = async (formData) => {
    try {
      setIsRequestLoading(true);
      const { data } = await api.post("/sessions", formData);
      localStorage.setItem(
        "KENZIEHUB@TOKEN",
        JSON.stringify(data.token)
      );
      localStorage.setItem(
        "KENZIEHUB@USERID",
        JSON.stringify(data.user.id)
      );
      setUserData(data.user);
      toast.success("Login efetuado com sucesso!", {
        autoClose: 2000,
      });
      navigate("/home");
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    } finally {
      setIsRequestLoading(false);
    }
  };

  const userLogout = () => {
    toast.success("Logout efetuado com sucesso!", {
      autoClose: 2000,
    });
    localStorage.removeItem("KENZIEHUB@USERID");
    localStorage.removeItem("KENZIEHUB@TOKEN");
    setUserData(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        userRegister,
        userLogin,
        userLogout,
        isRequestLoading,
        setIsRequestLoading,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
