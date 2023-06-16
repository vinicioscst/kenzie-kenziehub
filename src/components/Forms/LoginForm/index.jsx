import { StyledTitle1, StyledHeadlineBold } from "../../../styles/typography";
import { StyledButtonLg, StyledLinkLg } from "../../../styles/buttons";
import Input from "../../Input";
import { StyledForm, StyledFormFooter, StyledLoginFormContainer } from "./style";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../../services/api";

const LoginForm = () => {
  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  const userLogin = async (formData) => {
    try {
      const response = await api.post("/sessions", formData)
      localStorage.setItem("@KENZIEHUB", JSON.stringify(response.data))
      toast.success("Login efetuado com sucesso!", {
        autoClose: 2000
      })
      setTimeout(() => {
        navigate("/home")
      }, "3000")
    } catch (error) {
      toast.error(`${error}`)
    }
  }

  const submit = (formData) => {
    userLogin(formData);
  };

  return (
    <StyledLoginFormContainer>
      <StyledTitle1>Login</StyledTitle1>
      <StyledForm onSubmit={handleSubmit(submit)} noValidate>
        <Input label="Email" type="email" placeholder="Digite aqui seu email" {...register("email")}/>
        <Input label="Senha" type="password" placeholder="Digite aqui sua senha" {...register("password")}/>
        <StyledButtonLg buttoncolor="primary" type="submit">Entrar</StyledButtonLg>
      </StyledForm>
      <StyledFormFooter>
        <StyledHeadlineBold>Ainda não possui uma conta?</StyledHeadlineBold>
        <StyledLinkLg to="/register" buttoncolor="default">Cadastre-se</StyledLinkLg>
      </StyledFormFooter>
    </StyledLoginFormContainer>
  );
}

export default LoginForm;
