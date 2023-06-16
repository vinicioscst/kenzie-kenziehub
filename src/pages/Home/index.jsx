import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { StyledButtonMd } from "../../styles/buttons";
import { toast } from "react-toastify";
import { StyledHomeContentContainer, StyledHomeHeaderContainer, StyledHomeUserContainer, StyledHomeH1, StyledHomeUserSection, StyledHomeH2 } from "./style";
import { useEffect, useState } from "react";
import { StyledHeadline } from "../../styles/typography";
import { api } from "../../services/api"


const Home = () => {

    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(true) 

    useEffect(() => {

        const getUser = async () => {
            const userInfo = JSON.parse(localStorage.getItem("@KENZIEHUB"))
            try {
                const {data} = await api.get(`/users/${userInfo.user.id}`)
                setUserData(data)
            } catch (error) {
                toast.error(`${error}`)
            } finally {
                setIsLoading(false)
            }
        }
        getUser()
    }, [])

    const navigate = useNavigate()

    const handleLogout = () => {
        toast.success("Logout efetuado com sucesso!", {
            autoClose: 2000
        })
      setTimeout(() => {
        localStorage.clear()
        navigate("/")
      }, "3000")
    }

    if(isLoading) {
        return (
            ""
        )
    }

  return (
    <>
      <StyledHomeHeaderContainer maxwidth={`calc(770px + 2.4rem)`}>
        <img src={Logo} alt="Kenzie Hub" />
        <StyledButtonMd onClick={handleLogout}>Sair</StyledButtonMd>
      </StyledHomeHeaderContainer>

      <StyledHomeUserSection>
        <StyledHomeUserContainer maxwidth={`calc(770px + 2.4rem)`}>
            <StyledHomeH1>Olá, {userData.name}</StyledHomeH1>
            <StyledHeadline>{userData.course_module}</StyledHeadline>
        </StyledHomeUserContainer>
      </StyledHomeUserSection>

      <StyledHomeContentContainer maxwidth={`calc(770px + 2.4rem)`}>
        <StyledHomeH1>Que pena! Estamos em desenvolvimento :(</StyledHomeH1>
        <StyledHomeH2>Nossa aplicação está em desenvolvimento, em breve teremos novidades</StyledHomeH2>
      </StyledHomeContentContainer>
    </>
  );
};

export default Home;
