import { useEffect, useState } from "react";
import Logo from "../../assets/Logo.svg";
import { api } from "../../services/api";
import { PlusButton } from "./style";
import { TecList } from "../../components/TecList";
import { ModalCreateTech } from "../../components/ModalCreateTech";
import { LogoutButton } from "../../components/LogoutButton";

export const HomePage = () => {
  const [dataUser, setDataUser] = useState([]);
  const [tecList, setTecList] = useState([]);
  const [isOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const getDataUser = async () => {
      const userID = JSON.parse(localStorage.getItem("kenzieHub@userID"));

      try {
        const { data } = await api.get(`/users/${userID}`);
        setDataUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataUser();
  }, []);

  useEffect(() => {
    const getTecList = async () => {
      if (dataUser && dataUser.techs) {
        const tecList = await dataUser.techs;
        setTecList(tecList);
      }
    };
    getTecList();
  }, [dataUser]);

  return (
    <div>
      <header>
        <img src={Logo} alt="Tech Hub" />
        <LogoutButton />
      </header>
      <div>
        <h2>
          Olá, <p>{dataUser.name}</p>
        </h2>
        <h3>{dataUser.course_module}</h3>
      </div>
      <div>
        <h2>Tecnologias</h2>
        <PlusButton type="button" onClick={() => setModalOpen(true)}>
          <img src={plus} alt="Sinal de mais" />
        </PlusButton>
      </div>
      <TecList dataUser={dataUser} tecList={tecList} />
      {isOpen ? (
        <ModalCreateTech setModalOpen={setModalOpen} setTecList={setTecList} />
      ) : null}
    </div>
  );
};
