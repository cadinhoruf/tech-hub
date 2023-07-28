import { useContext, useRef } from "react";
import { TechsContext } from "../../providers/TechsContext";
import { FormUpdateTech } from "../FormUpdateTech";
import { useEffect } from "react";
import { ModalUpdateStyled } from "../FormUpdateTech/style";
import { HeaderModal } from "../../ModalCreateTech/style";
import X from "../../assets/X.svg";

export const ModalUpdateExcludeTech = () => {
  const { setIsUpdateOpen } = useContext(TechsContext);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsUpdateOpen(false);
      }
    };
    const handleOutClick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setIsUpdateOpen(false);
      }
    };
    window.addEventListener("mousedown", handleOutClick);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <ModalUpdateStyled role="dialog" ref={modalRef}>
      <HeaderModal>
        Tecnologia Detalhes
        <img src={X} alt="X" onClick={() => setIsUpdateOpen(false)} />
      </HeaderModal>
      <FormUpdateTech />
    </ModalUpdateStyled>
  );
};
