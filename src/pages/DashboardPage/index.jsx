import { useContext } from "react";
import Logo from "../../assets/Logo.svg";
import plus from "../../assets/Button Plus.svg";
import {
  ContainerHome,
  HeaderStyled,
  HeadlineBoldUser,
  PlusButton,
  TechContainer,
  UserContainer,
  UserTitle,
} from "./style";
import { UserContext } from "../../providers/UserContext";
import { Link } from "react-router-dom";
import { TechList } from "../../components/TechList";
import { ModalCreateTech } from "../../ModalCreateTech";
import { TechsContext } from "../../providers/TechsContext";
import { ModalUpdateExcludeTech } from "../../components/ModalUpdateExcludeTech";

export const DashboardPage = () => {
  const { user, handleLogout, isOpen, setModalOpen } = useContext(UserContext);
  const { isUpdateOpen } = useContext(TechsContext);

  return (
    <ContainerHome>
      <HeaderStyled>
        <h3>Tech Hub</h3>
        <Link to="/" onClick={handleLogout}>
          Sair
        </Link>
      </HeaderStyled>
      <UserContainer>
        <UserTitle>
          Olá,<p>{user?.name}</p>
        </UserTitle>
        <HeadlineBoldUser>{user?.course_module}</HeadlineBoldUser>
      </UserContainer>
      <TechContainer>
        <div>
          <h2>Tecnologias</h2>
          <PlusButton type="button" onClick={() => setModalOpen(true)}>
            <img src={plus} alt="Sinal de mais" />
          </PlusButton>
        </div>
        <TechList />
      </TechContainer>
      {isOpen ? <ModalCreateTech /> : null}
      {isUpdateOpen ? <ModalUpdateExcludeTech /> : null}
    </ContainerHome>
  );
};
