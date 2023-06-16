import { useState } from "react";
import Logo from "../../assets/logo.svg";
import LoginForm from "../../components/Forms/LoginForm";
import { StyledLoginContainer } from "./style";

const Login = ({ userData, setUserData }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <StyledLoginContainer maxwidth={`calc(370px + 2.4rem)`}>
      <img src={Logo} alt="Kenzie Hub" />
      <LoginForm
        userData={userData}
        setUserData={setUserData}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </StyledLoginContainer>
  );
};

export default Login;
