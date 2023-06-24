import Logo from "../../assets/logo.svg";
import { StyledButtonMd } from "../../styles/buttons";
import {
  StyledHomeContentContainer,
  StyledHomeNavbarContainer,
  StyledHomeUserContainer,
  StyledHomeH1,
  StyledHomeHeaderSection,
} from "./style";
import { StyledHeadline } from "../../styles/typography";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import TechList from "../../components/TechList";
import { useEffect } from "react";
import { TechContext } from "../../providers/TechContext";
import CreateTechModal from "../../components/Modals/CreateTechModal";
import EditTechModal from "../../components/Modals/EditTechModal";

const Home = () => {
  const { userData, userLogout } = useContext(UserContext);
  const { setIsAdding, setIsEditing, setCurrentTech } = useContext(TechContext);

  useEffect(() => {
    document.title = "Kenzie Hub | Home";
  }, []);

  const closeAddModal = () => {
    setIsAdding(false);
  };

  const closeEditModal = () => {
    setIsEditing(false);
    setCurrentTech(null);
  };

  return (
    <>
      <StyledHomeNavbarContainer maxwidth={`calc(770px + 2.4rem)`}>
        <img src={Logo} alt="Kenzie Hub" />
        <StyledButtonMd onClick={userLogout}>Sair</StyledButtonMd>
      </StyledHomeNavbarContainer>

      <StyledHomeHeaderSection>
        <StyledHomeUserContainer maxwidth={`calc(770px + 2.4rem)`}>
          <StyledHomeH1>Olá, {userData?.name}</StyledHomeH1>
          <StyledHeadline>{userData?.course_module}</StyledHeadline>
        </StyledHomeUserContainer>
      </StyledHomeHeaderSection>

      <StyledHomeContentContainer maxwidth={`calc(770px + 2.4rem)`}>
        <TechList />
      </StyledHomeContentContainer>

      <CreateTechModal closeAddModal={closeAddModal} />
      <EditTechModal closeEditModal={closeEditModal} />
    </>
  );
};

export default Home;
