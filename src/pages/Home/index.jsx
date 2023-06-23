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
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import TechList from "../../components/TechList";
import { useEffect } from "react";
import { TechContext } from "../../providers/TechContext";
import TechModals from "../../components/TechModals";

const Home = () => {
  const { userData, userLogout } = useContext(UserContext);
  const { isAdding, setIsAdding, isEditing, setIsEditing } = useContext(TechContext);


  useEffect(() => {
    document.title = "Kenzie Hub | Home";
  }, []);

  const closeAddModal = () => {
    setIsAdding(false);
  };

  const closeEditModal = () => {
    setIsEditing(false);
  };

  return (
    <>
      <StyledHomeNavbarContainer maxwidth={`calc(770px + 2.4rem)`}>
        <img src={Logo} alt="Kenzie Hub" />
        <StyledButtonMd onClick={userLogout}>Sair</StyledButtonMd>
      </StyledHomeNavbarContainer>

      <StyledHomeHeaderSection>
        <StyledHomeUserContainer maxwidth={`calc(770px + 2.4rem)`}>
          <StyledHomeH1>Olá, {userData.name}</StyledHomeH1>
          <StyledHeadline>{userData.course_module}</StyledHeadline>
        </StyledHomeUserContainer>
      </StyledHomeHeaderSection>

      <StyledHomeContentContainer maxwidth={`calc(770px + 2.4rem)`}>
        <TechList />
      </StyledHomeContentContainer>


      <TechModals isAdding={isAdding} closeAddModal={closeAddModal} isEditing={isEditing} closeEditModal={closeEditModal}/>
    </>
  );
};

export default Home;
