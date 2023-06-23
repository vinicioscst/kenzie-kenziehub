import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTechSchema } from "../components/TechModals/createTechSchema";


export const TechContext = createContext({})

const TechProvider = ({children}) => {
    const [techList, setTechList] = useState([]);
    const [ isAdding, setIsAdding ] = useState(false)
    const [ isEditing, setIsEditing ] = useState(false)
    const [ currentTech, setCurrentTech ] = useState(null)

    const { userData } = useContext(UserContext)

    useEffect(() => {
        setTechList(userData?.techs)
    }, [userData])

    const {
        register,
        handleSubmit, reset,
        formState: { errors, isValid },
      } = useForm({
        resolver: zodResolver(createTechSchema),
    });

    const {
        register: registerEdit,
        handleSubmit: handleSubmitEdit
      } = useForm();

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
            toast.success("Tecnologia adicionada com sucesso");
            
        } catch (error) {
            toast.error(`${error.response.data.message}`);
        }
    }
    
    const editTech = async (formData) => {
        const techId = currentTech.id
        try {
            const token = JSON.parse(localStorage.getItem("KENZIEHUB@TOKEN"))

            await api.put(`/users/techs/${techId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const { data } = await api.get("/profile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTechList(data.techs)
            setIsEditing(false)
            toast.success("Tecnologia alterada com sucesso");
            
        } catch (error) {
            toast.error(`${error.response.data.message}`);
        }
    }

    const deleteTech = async (techId) => {
        try {
            const token = JSON.parse(localStorage.getItem("KENZIEHUB@TOKEN"))
            await api.delete(`/users/techs/${techId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setIsEditing(false)
            setTechList((techList) => techList.filter(currentNew => currentNew.id !== techId));
            toast.success("Tecnologia deletada com sucesso");
            
        } catch (error) {
            toast.error(`${error.response.data.message}`);
        }
    }

    return (
        <TechContext.Provider value={{techList, setTechList, isAdding, setIsAdding, isEditing, setIsEditing, register, registerEdit, handleSubmit, handleSubmitEdit, errors, isValid, createTech, editTech, deleteTech, currentTech, setCurrentTech}}>
            {children}
        </TechContext.Provider>
    )
}


export default TechProvider