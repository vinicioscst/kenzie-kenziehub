import { StyledTitle1, StyledHeadlineBold } from "../../../styles/typography";
import { StyledButtonLg, StyledLinkLg } from "../../../styles/buttons";
import Input from "../../Input";
import {
  StyledForm,
  StyledFormFooter,
  StyledLoginFormContainer,
} from "./style";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "./loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";
import { UserContext } from "../../../providers/UserContext";
import { useContext } from "react";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const { userLogin, isLoading } = useContext(UserContext)

  const submit = (formData) => {
    userLogin(formData);
  };

  return (
    <StyledLoginFormContainer>
      <StyledTitle1>Login</StyledTitle1>
      <StyledForm onSubmit={handleSubmit(submit)} noValidate>
        <Input
          label="Email"
          type="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
          error={errors.email}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
          error={errors.password}
        />
        {isLoading ? (
          <StyledButtonLg buttoncolor="primary" type="submit">
            <UseAnimations animation={loading} strokeColor="white" />
          </StyledButtonLg>
        ) : (
          <StyledButtonLg buttoncolor="primary" type="submit">
            Entrar
          </StyledButtonLg>
        )}
      </StyledForm>
      <StyledFormFooter>
        <StyledHeadlineBold>Ainda não possui uma conta?</StyledHeadlineBold>
        <StyledLinkLg to="/register" buttoncolor="default">
          Cadastre-se
        </StyledLinkLg>
      </StyledFormFooter>
    </StyledLoginFormContainer>
  );
};

export default LoginForm;
