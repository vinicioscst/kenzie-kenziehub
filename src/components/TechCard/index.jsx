import { StyledHeadline, StyledTitle3 } from "../../styles/typography"
import { StyledCard } from "./style"


const TechCard= ({tech, openEditModal}) => {
    return (
        <StyledCard onClick={() => openEditModal(tech)}>
            <StyledTitle3>{tech.title}</StyledTitle3>
            <StyledHeadline>{tech.status}</StyledHeadline>
        </StyledCard>
    )
}

export default TechCard