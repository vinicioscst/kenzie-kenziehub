import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import {
  StyledTechListH2,
  StyledTechListHeader,
  StyledTechListSection,
} from "./style";
import Add from "../../assets/add.svg";
import { StyledButtonIconMd } from "../../styles/buttons";
import TechCard from "../TechCard";

const TechList = () => {
  const { techList, setIsAdding, setIsEditing, currentTech, setCurrentTech } = useContext(TechContext);

  const openAddModal = () => {
    setIsAdding(true);
  };

  const openEditModal = (tech) => {
    setCurrentTech(tech)
    setIsEditing(true);
  };

  return (
    <>
      <StyledTechListHeader>
        <StyledTechListH2>Tecnologias</StyledTechListH2>
        <StyledButtonIconMd onClick={openAddModal}>
          <img src={Add} alt="Adicionar tecnologia" />
        </StyledButtonIconMd>
      </StyledTechListHeader>

      <StyledTechListSection>
        <ul>
          {techList.map((tech) => {
            return (
              <TechCard key={tech.id} tech={tech} openEditModal={openEditModal}/>
            );
          })}
        </ul>
      </StyledTechListSection>
    </>
  );
};

export default TechList;
