import styled, { css } from "styled-components";
import { Headline, titleOne } from "../../../styles/Typography";

export const ContainerColumn = css`
  display: flex;
  flex-direction: column;
`;

export const LoginStyled = styled.h1`
  ${titleOne}
  color:var(--color-grey-0);

  text-align: center;
`;

export const RegisterContainer = styled.div`
  ${ContainerColumn}
`;

export const FormContainer = styled.div`
  ${ContainerColumn}
  gap: 1rem;
  width: 18rem;
  background-color: var(--color-grey-3);
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);

  padding: 2rem 1rem;

  border-radius: 3px;

  justify-content: center;

  @media (min-width: 1024px) {
    width: 20rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    height: 2.5rem;
    background: var(--color-grey-1);
    color: var(--color-grey-0);
  }
`;

export const StyledParagraph = styled.p`
  ${Headline}

  text-align: center;

  color: var(--color-grey-1);
`;

export const StyledProject = styled.div`
  ${ContainerColumn}
  gap:1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  align-items: center;

  h3 {
    color: var(--color-primary);
  }

  @media (min-width: 1024px) {
    img {
      width: 8rem;
    }
  }
`;
