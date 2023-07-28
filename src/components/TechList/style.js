import styled from "styled-components";
import { HeadlineBold, TitleThree, titleTwo } from "../../../styles/Typography";

export const UlStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
  background-color: var(--color-grey-3);

  min-height: 55vh;

  h3 {
    ${TitleThree}
    justify-content:center;

    text-align: center;
    color: var(--color-grey-1);
  }
`;

export const TechListStyled = styled.li`
  border-radius: 4px;
  background-color: var(--color-grey-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  height: 3rem;

  border-radius: 4px;

  h3 {
    ${titleTwo}
    color: var(--color-grey-0);
  }

  p {
    ${HeadlineBold}
    color: var(--color-grey-1);
  }
`;
