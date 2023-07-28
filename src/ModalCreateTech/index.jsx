import { useContext, useEffect, useRef } from "react";
import X from "../assets/X.svg";
import { ModalStyled } from "./style";
import { HeaderModal } from "./style";
import { FormAddTec } from "../FormAddTec";
import { UserContext } from "../providers/UserContext";

export const ModalCreateTech = () => {

  const { setModalOpen } = useContext(UserContext);


  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setModalOpen(false);
      }
    };
    const handleOutClick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setModalOpen(false);
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
    <div role="dialog">
      <ModalStyled ref={modalRef}>
        <HeaderModal>
          <h3>Cadastrar tecnologia</h3>
          <img src={X} alt="X" onClick={() => setModalOpen(false)} />
        </HeaderModal>
        <FormAddTec setModalOpen={setModalOpen} />
      </ModalStyled>
    </div>
  );
};
