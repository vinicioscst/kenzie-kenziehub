import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTechSchema } from "../components/TechModals/createTechSchema";
import { editTechSchema } from "../components/TechModals/editTechSchema";


export const TechContext = createContext({})

const TechProvider = ({children}) => {
    const [techList, setTechList] = useState([]);
    const [ isAdding, setIsAdding ] = useState(false)
    const [ isEditing, setIsEditing ] = useState(false)

    const { userData } = useContext(UserContext)

    useEffect(() => {
        setTechList(userData.techs)
    }, [])

    const {
        register,
        handleSubmit, reset,
        formState: { errors, isValid },
      } = useForm({
        resolver: zodResolver(createTechSchema, editTechSchema),
    });



    const createTech = async (formData) => {
        try {
            const token = JSON.parse(localStorage.getItem("KENZIEHUB@TOKEN"))
            const { data } = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setIsAdding(false)
            reset({data: 'title',data: 'status' })
            setTechList((techList) => [...techList, data])
            
        } catch (error) {
            toast.error(`${error.response.data.message}`);
        }
    }

    return (
        <TechContext.Provider value={{techList, setTechList, isAdding, setIsAdding, isEditing, setIsEditing, register, handleSubmit, errors, isValid, createTech}}>
            {children}
        </TechContext.Provider>
    )
}


export default TechProvider