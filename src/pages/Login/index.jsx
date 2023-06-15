import Logo from "../../assets/logo.svg";
import LoginForm from "../../components/LoginForm";
import { StyledLoginContainer } from "./style";

function Login() {
  return (
    <StyledLoginContainer maxwidth="370">
      <img src={Logo} alt="Kenzie Hub" />
      <LoginForm />
    </StyledLoginContainer>
  );
}

export default Login;
