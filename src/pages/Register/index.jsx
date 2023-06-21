import Logo from "../../assets/logo.svg";
import RegisterForm from "../../components/Forms/RegisterForm";
import { StyledLinkMd } from "../../styles/buttons";
import { StyledContainerHeader, StyledRegisterContainer } from "./style";

const Register = () => {
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
