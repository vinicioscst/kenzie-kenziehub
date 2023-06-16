import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { StyledButtonMd } from "../../styles/buttons";
import { toast } from "react-toastify";
import {
  StyledHomeContentContainer,
  StyledHomeHeaderContainer,
  StyledHomeUserContainer,
  StyledHomeH1,
  StyledHomeUserSection,
  StyledHomeH2,
} from "./style";
import { StyledHeadline } from "../../styles/typography";

const Home = ({ userData, setUserData }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logout efetuado com sucesso!", {
      autoClose: 2000,
    });
    setTimeout(() => {
      localStorage.clear();
      setUserData(null);
      navigate("/");
    }, "3000");
  };

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
        <StyledHomeH2>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </StyledHomeH2>
      </StyledHomeContentContainer>
    </>
  );
};

export default Home;
