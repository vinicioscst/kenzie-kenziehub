import { StyledTitle1, StyledHeadlineBold } from "../../../styles/typography";
import { StyledButtonLg, StyledLinkLg } from "../../../styles/buttons";
import Input from "../../Input";
import { StyledForm, StyledFormFooter, StyledLoginFormContainer } from "./style";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../../services/api";
import { loginFormSchema } from "./loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import UseAnimations from "react-useanimations";
import loading from 'react-useanimations/lib/loading'

const LoginForm = ({setUserData, isLoading, setIsLoading}) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginFormSchema),
  })

  const navigate = useNavigate()

  const userLogin = async (formData) => {
    try {
      setIsLoading(true)
      const response = await api.post("/sessions", formData)
      localStorage.setItem("KENZIEHUB@TOKEN", JSON.stringify(response.data.token))
      localStorage.setItem("KENZIEHUB@USERID", JSON.stringify(response.data.user.id))
      setUserData(response.data.user)
      toast.success("Login efetuado com sucesso!", {
        autoClose: 2000
      })
      setTimeout(() => {
        navigate("/home")
      }, "3000")
    } catch (error) {
      toast.error(`${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  const submit = (formData) => {
    userLogin(formData);
  };

  return (
    <StyledLoginFormContainer>
      <StyledTitle1>Login</StyledTitle1>
      <StyledForm onSubmit={handleSubmit(submit)} noValidate>
        <Input label="Email" type="email" placeholder="Digite aqui seu email" {...register("email")} error={errors.email}/>
        <Input label="Senha" type="password" placeholder="Digite aqui sua senha" {...register("password")} error={errors.password}/>
        {isLoading ?
        <StyledButtonLg buttoncolor="primary" type="submit"><UseAnimations animation={loading} strokeColor="white"/></StyledButtonLg> :
        <StyledButtonLg buttoncolor="primary" type="submit">Entrar</StyledButtonLg>
        }
      </StyledForm>
      <StyledFormFooter>
        <StyledHeadlineBold>Ainda não possui uma conta?</StyledHeadlineBold>
        <StyledLinkLg to="/register" buttoncolor="default">Cadastre-se</StyledLinkLg>
      </StyledFormFooter>
    </StyledLoginFormContainer>
  );
}

export default LoginForm;
