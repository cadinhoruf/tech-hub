import styled, { css } from "styled-components";
import { titleOne } from "../../../styles/Typography";

export const ContainerColumn = css`
  display: flex;
  flex-direction: column;
`;

export const LoginStyled = styled.h1`
  ${titleOne}
  color:var(--color-grey-0);
`;

export const RegisterContainer = styled.div`
  ${ContainerColumn}
`;
