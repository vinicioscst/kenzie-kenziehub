import { useEffect } from "react";
import Logo from "../../assets/logo.svg";
import RegisterForm from "../../components/Forms/RegisterForm";
import { StyledLinkMd } from "../../styles/buttons";
import { StyledContainerHeader, StyledRegisterContainer } from "./style";

const Register = () => {
  useEffect(() => {
    document.title = "Kenzie Hub | Cadastro";
  }, []);

  return (
    <StyledRegisterContainer maxwidth={`calc(370px + 2.4rem)`}>
      <StyledContainerHeader>
        <img src={Logo} alt="Kenzie Hub" />
        <StyledLinkMd to="/">Voltar</StyledLinkMd>
      </StyledContainerHeader>
      <RegisterForm />
    </StyledRegisterContainer>
  );
};

export default Register;
