import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { api } from "../services/api";
import { toast } from "react-toastify";


export const TechContext = createContext({})

const TechProvider = ({children}) => {
    const [techList, setTechList] = useState([]);
    const [ isAdding, setIsAdding ] = useState(false)
    const [ isEditing, setIsEditing ] = useState(false)

    const { userData } = useContext(UserContext)

    useEffect(() => {
        setTechList(userData.techs)
    })

    const createTech = async (formData) => {
        try {
            const token = localStorage.getItem("KENZIEHUB@TOKEN")
            const { data } = api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTechList(...techList, data)
        } catch (error) {
            toast.error(`${error.response.data.message}`);
        }
    }

    return (
        <TechContext.Provider value={{techList, setTechList, isAdding, setIsAdding, isEditing, setIsEditing}}>
            {children}
        </TechContext.Provider>
    )
}


export default TechProvider