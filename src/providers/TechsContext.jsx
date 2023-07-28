import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {

  const { user } = useContext(UserContext);

  const [techList, setTechList] = useState(user.techs || []); 
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [techID, setTechID] = useState("");
  const [techName, setTechName] = useState("");


  const addTech = async (formData) => {
    try {
      const token = JSON.parse(localStorage.getItem("kenzieHub@token"));
      const { data } = await api.post("users/techs/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia criada com sucesso !");
      setTechList((tecList) => [...tecList, data]);
    } catch (error) {
      console.log(error);
      toast.error("Tecnologia já criada, você pode atualiza-lá.");
    }
  };

  const updateTech = async (tecID, formData) => {
    try {
      const token = JSON.parse(localStorage.getItem("kenzieHub@token"));
      const { data } = await api.put(`/users/techs/${tecID}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const index = techList.findIndex((tech) => tech.id === tecID);
      if (index !== 1) {
        const updatedTechList = [...techList];
        updatedTechList[index] = data;
        setTechList(updatedTechList);
      }
      toast.success("Tecnologia atualizada com sucesso !");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTech = async (techID) => {
    try {
      const token = JSON.parse(localStorage.getItem("kenzieHub@token"));
      await api.delete(`/users/techs/${techID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia excluída com sucesso !");
      setTechList(techList.filter((tech) => tech.id !== techID));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechsContext.Provider
      value={{
        techList,
        setTechList,
        addTech,
        isUpdateOpen,
        setIsUpdateOpen,
        updateTech,
        techID,
        setTechID,
        deleteTech,
        techName,
        setTechName,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};
