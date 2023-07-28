import { useContext, useEffect, useState } from "react";
import { TechListStyled, UlStyled } from "./style";
import { TechsContext } from "../../providers/TechsContext";

export const TechList = () => {
  const { techList, setIsUpdateOpen, setTechID, setTechName } =
    useContext(TechsContext);
  return (
    <UlStyled>
      {techList.length !== 0 ? (
        techList.map((tec) => (
          <TechListStyled
            key={tec.id}
            onClick={() => {
              setIsUpdateOpen(true);
              setTechID(tec.id);
              setTechName(tec.title);
              console.log(tec.title)
            }}
          >
            <h3>{tec.title}</h3>
            <p>{tec.status}</p>
          </TechListStyled>
        ))
      ) : (
        <h3>Não há tecnologias, adicione uma no botão de "+"</h3>
      )}
    </UlStyled>
  );
};
