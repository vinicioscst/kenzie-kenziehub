import { StyledLabel } from "../../styles/typography";
import { StyledFieldset, StyledInput } from "./style";


function Input({label, ...rest}) {
    return (
      <StyledFieldset>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput {...rest}/>
      </StyledFieldset>
    );
  }
  
  export default Input;
  