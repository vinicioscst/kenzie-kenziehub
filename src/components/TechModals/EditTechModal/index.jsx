import { useEffect } from "react";
import { useRef } from "react";
import Close from "../../../assets/close.svg";
import {
  StyledModal,
  StyledModalContainer,
  StyledModalContent,
  StyledModalHeader,
} from "../style";
import { StyledTitle3 } from "../../../styles/typography";
import Input from "../../Input";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import { StyledButtonLg } from "../../../styles/buttons";
import Select from "../../Select";

const EditTechModal = ({ closeEditModal }) => {
  const {
    isEditing,
    registerEdit,
    handleSubmitEdit, editTech, deleteTech,
    currentTech,
  } = useContext(TechContext);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutClick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
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
        closeEditModal();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);


  const submitEditTech = (formData) => {
    editTech(formData)
  };

  const deleteEditTech = (techId) => {
    deleteTech(techId);
  };

  return (
    <>
      {isEditing ? (
        <StyledModal role="dialog">
          <StyledModalContainer ref={modalRef}>
            <StyledModalHeader>
              <StyledTitle3>{currentTech.title} | Detalhes</StyledTitle3>
              <img src={Close} alt="Fechar" onClick={() => closeEditModal()} />
            </StyledModalHeader>

            <StyledModalContent>
              <form onSubmit={handleSubmitEdit(submitEditTech)} noValidate>
                <Input
                  label="Nome"
                  type="text"
                  value={currentTech.title}
                  disabled
                />
                <Select
                  label="Status"
                  {...registerEdit("status")}
                >
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </Select>
                <StyledButtonLg buttoncolor="primary" type="submit">
                    Salvar alterações
                  </StyledButtonLg>
                  <StyledButtonLg buttoncolor="default" type="button" onClick={() => deleteEditTech(`${currentTech.id}`)}>
                    Excluir
                  </StyledButtonLg>
              </form>
            </StyledModalContent>
          </StyledModalContainer>
        </StyledModal>
      ) : null}
    </>
  );
};

export default EditTechModal;
