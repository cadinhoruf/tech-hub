import { TecListStyled, UlStyled } from "./style";

export const TecList = ({ tecList }) => {
  return (
    <UlStyled>
      {tecList.map((tec) => (
        <TecListStyled key={tec.id}>
          <h3>{tec.title}</h3>
          <p>{tec.status}</p>
        </TecListStyled>
      ))}
    </UlStyled>
  );
};
