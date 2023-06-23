import { useEffect } from "react";
import Logo from "../../assets/logo.svg";
import LoginForm from "../../components/Forms/LoginForm";
import { StyledLoginContainer } from "./style";

const Login = () => {
  useEffect(() => {
    document.title = "Kenzie Hub | Login";
  }, []);

  return (
    <StyledLoginContainer maxwidth={`calc(370px + 2.4rem)`}>
      <img src={Logo} alt="Kenzie Hub" />
      <LoginForm />
    </StyledLoginContainer>
  );
};

export default Login;
