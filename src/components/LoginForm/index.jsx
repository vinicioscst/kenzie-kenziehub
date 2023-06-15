import { StyledTitle1, StyledHeadlineBold } from "../../styles/typography";
import { StyledButtonLg } from "../../styles/buttons";
import Input from "../Input";
import { StyledForm, StyledFormFooter, StyledLoginFormContainer } from "./style";

function LoginForm() {
  return (
    <StyledLoginFormContainer>
      <StyledTitle1>Login</StyledTitle1>
      <StyledForm>
        <Input label="Email" type="email" placeholder="Digite aqui seu email" />
        <Input label="Senha" type="password" placeholder="Digite aqui sua senha" />
        <StyledButtonLg buttoncolor="primary" type="submit">Entrar</StyledButtonLg>
      </StyledForm>
      <StyledFormFooter>
        <StyledHeadlineBold>Ainda não possui uma conta?</StyledHeadlineBold>
        <StyledButtonLg buttoncolor="default">Cadastre-se</StyledButtonLg>
      </StyledFormFooter>
    </StyledLoginFormContainer>
  );
}

export default LoginForm;
