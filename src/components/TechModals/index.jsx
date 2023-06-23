import { useEffect } from "react";
import { useRef } from "react";
import Close from "../../assets/close.svg";
import {
  StyledModal,
  StyledModalContainer,
  StyledModalContent,
  StyledModalHeader,
} from "./style";
import { StyledTitle3 } from "../../styles/typography";
import Input from "../Input";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { StyledButtonLg } from "../../styles/buttons";
import Select from "../Select";

const TechModals = ({ closeAddModal, closeEditModal }) => {
  const { isAdding, isEditing, register, handleSubmit, errors, isValid, createTech } =
    useContext(TechContext);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutClick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        closeAddModal();
        closeEditModal();
      }
    };

    window.addEventListener("mousedown", handleOutClick);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        closeAddModal();
        closeEditModal();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const submitAddTech = (formData) => {
    createTech(formData);
  };

  return (
    <>
      {isAdding ? (
        <StyledModal role="dialog">
          <StyledModalContainer ref={modalRef}>
            <StyledModalHeader>
              <StyledTitle3>Cadastrar tecnologia</StyledTitle3>
              <img src={Close} alt="Fechar" onClick={() => closeAddModal()} />
            </StyledModalHeader>

            <StyledModalContent>
              <form onSubmit={handleSubmit(submitAddTech)} noValidate>
                <Input
                  label="Nome"
                  type="text"
                  placeholder="Exemplo: Typescript"
                  {...register("title")} error={errors.title}
                />
                <Select
          label="Selecionar status"
          {...register("status")} error={errors.status}
        >
          <option value="" hidden>
            Selecionar status
          </option>
          <option value="Iniciante">
          Iniciante
          </option>
          <option value="Intermediário">
          Intermediário
          </option>
          <option value="Avançado">
          Avançado
          </option>
        </Select>
        <StyledButtonLg buttoncolor="primary" type="submit" disabled={!isValid}>
          Cadastrar Tecnologia
        </StyledButtonLg>
              </form>
            </StyledModalContent>
          </StyledModalContainer>
        </StyledModal>
      ) : null}

      {isEditing ? (
        <StyledModal role="dialog">
          <StyledModalContainer ref={modalRef}>
            <StyledModalHeader>
              <h3>Editando</h3>
              <img src={Close} alt="Fechar" onClick={() => closeEditModal()} />
            </StyledModalHeader>

            <StyledModalContent>
              <p>a</p>
            </StyledModalContent>
          </StyledModalContainer>
        </StyledModal>
      ) : null}
    </>
  );
};

export default TechModals;
