import styled from "styled-components";
import { HeadlineBold, titleOne, titleTwo } from "../../../styles/Typography";

export const ContainerHome = styled.div`
  @media (min-width: 800px) {
    width: 100%;
  }
  max-width: 2000px;
`;

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;

  padding: 1rem 2rem;
  
  h3 {
    color: var(--color-primary);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--color-grey-0);
    background-color: var(--color-grey-3);

    padding: 0 1rem;
    width: 4rem;
    height: 2rem;

    border-radius: 4px;

    font-weight: 600;
  }

  @media (min-width: 800px) {
    padding: 1rem 8rem;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  border-top: 1px solid var(--color-grey-3);
  border-bottom: 1px solid var(--color-grey-3);

  padding: 1rem 2rem;

  height: 6rem;

  @media (min-width: 800px) {
    flex-direction: row;

    padding: 1rem 8rem;
  }
`;

export const UserTitle = styled.h1`
  ${titleOne}
  color: var(--color-grey-0);

  display: flex;
  line-height: 28px;
`;

export const HeadlineBoldUser = styled.p`
  ${HeadlineBold}
  color: var(--color-grey-1);
  font-weight: 600;
`;

export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100vw;

  padding: 1rem 2rem;

  @media (min-width: 800px) {
    padding: 1rem 8rem;
  }

  > div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  h2 {
    color: var(--color-grey-0);
    font-weight: 600;
  }
`;

export const PlusButton = styled.button`
  background-color: var(--color-grey-300);
`;
