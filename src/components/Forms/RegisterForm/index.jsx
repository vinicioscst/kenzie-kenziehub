import { StyledButtonLg } from "../../../styles/buttons";
import Input from "../../Input";
import { StyledForm, StyledRegisterFormContainer, StyledSubtitle, StyledTitle } from "./style";
import Select from "../../Select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api"


const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerFormSchema),
  });
  
  const navigate = useNavigate()

  const userRegister = async (formData) => {
    try {
      console.log(formData)
      const response = await api.post("/users", formData)
      console.log(response)
      toast.success("Conta criada com sucesso!")
      setTimeout(() => {
        navigate("/")
      }, "2000")
    } catch (error) {
      toast.error(`${error}`)
    }
  }

  const submit = (formData) => {
    userRegister(formData);
  };

  return (
    <StyledRegisterFormContainer>
      <StyledTitle>Crie sua conta</StyledTitle>
      <StyledSubtitle>Rápido e grátis, vamos nessa</StyledSubtitle>
      <StyledForm onSubmit={handleSubmit(submit)} noValidate>
        <Input
          label="Nome"
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
          error={errors.name}
        />

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

        <Input
          label="Confirmar senha"
          type="password"
          placeholder="Digite novamente sua senha"
          {...register("confirm_password")}
          error={errors.confirm_password}
        />

        <Input
          label="Bio"
          type="text"
          placeholder="Fale sobre você"
          {...register("bio")}
          error={errors.bio}
        />

        <Input
          label="Contato"
          type="text"
          placeholder="Opção de contato"
          {...register("contact")}
          error={errors.contact}
        />

        <Select label="Selecionar módulo" {...register("course_module")} error={errors.course_module}>
          <option value="" hidden>
            Selecionar módulo
          </option>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo
          </option>
        </Select>
        <StyledButtonLg buttoncolor="primary" type="submit">
          Cadastrar
        </StyledButtonLg>
      </StyledForm>
    </StyledRegisterFormContainer>
  );
};

export default RegisterForm;
