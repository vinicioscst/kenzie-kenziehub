import { forwardRef } from "react";
import { StyledHelperText, StyledLabel } from "../../styles/typography";
import { StyledFieldset, StyledSelect } from "./style";

const Select = forwardRef(({ label, error, children, ...rest }, ref) => {
  return (
    <StyledFieldset>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect ref={ref} {...rest}>
        {children}
      </StyledSelect>
      {error ? <StyledHelperText>{error.message}</StyledHelperText> : null}
    </StyledFieldset>
  );
});

export default Select;
