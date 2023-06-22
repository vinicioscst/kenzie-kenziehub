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
  const { techList, setTechList } = useContext(TechContext);

  return (
    <>
      <StyledTechListHeader>
        <StyledTechListH2>Tecnologias</StyledTechListH2>
        <StyledButtonIconMd>
          <img src={Add} alt="Adicionar tecnologia" />
        </StyledButtonIconMd>
      </StyledTechListHeader>

      <StyledTechListSection>
        <ul>
          {techList.map((tech) => {
            return (
              <TechCard key={tech.id} tech={tech}/>
            );
          })}
        </ul>
      </StyledTechListSection>
    </>
  );
};

export default TechList;
