import { useEffect } from "react";
import { useRef } from "react";
import Close from "../../assets/close.svg";
import { StyledModal, StyledModalContainer, StyledModalContent, StyledModalHeader } from "./style";

const TechModals = ({isAdding, isEditing, closeAddModal, closeEditModal}) => {
  
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutClick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        closeAddModal();
        closeEditModal()
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
        closeEditModal()
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <>
    {isAdding ? (
      <StyledModal role="dialog">
      <StyledModalContainer ref={modalRef}>
        <StyledModalHeader>
          <h3>Adicionando</h3>
          <img src={Close} alt="Fechar" onClick={() => closeAddModal()}/>
        </StyledModalHeader>

        <StyledModalContent>
          <p>a</p>
        </StyledModalContent>
      </StyledModalContainer>
    </StyledModal>
    ) : null}

  {isEditing ? (
      <StyledModal role="dialog">
      <StyledModalContainer ref={modalRef}>
        <StyledModalHeader>
          <h3>Editando</h3>
          <img src={Close} alt="Fechar" onClick={() => closeEditModal()}/>
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