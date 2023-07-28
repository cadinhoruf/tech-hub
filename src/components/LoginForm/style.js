import styled from "styled-components";
import { ContainerColumn } from "../../pages/LoginPage/style";
import { HeadlineBold } from "../../../styles/Typography";

export const LoginFormStyled = styled.form`
  ${ContainerColumn}
  gap:1rem;

  p {
    ${HeadlineBold}
    font-size: 11px;
    color: var(--color-grey-1);
  }
`;
export const EntryButton = styled.button`
  color: #ffffff;
  background-color: var(--color-primary);

  border-radius: 4px;

  padding: 0 22px;

  height: 2.5rem;
  width: 99%;

  font-size: 16px;

  &:hover {
    background-color: var(--color-primary-50);
  }
`;
