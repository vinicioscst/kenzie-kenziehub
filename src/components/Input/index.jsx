import { forwardRef } from "react";
import { StyledHelperText, StyledLabel } from "../../styles/typography";
import { StyledFieldset, StyledInput } from "./style";

const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <StyledFieldset>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...rest} ref={ref} />
      {error ? <StyledHelperText>{error.message}</StyledHelperText> : null}
    </StyledFieldset>
  );
});

export default Input;
