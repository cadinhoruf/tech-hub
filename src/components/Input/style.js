import styled from "styled-components";
import { Headline } from "../../../styles/Typography";
import { ContainerColumn } from "../../pages/LoginPage/style";

export const InputContainer = styled.div`
  ${ContainerColumn}
  gap: .5rem;

  label {
    ${Headline}
    color: var(--color-grey-0);
  }
`;
export const InputDefault = styled.input`
  display: flex;
  flex-direction: column;

  padding: 0px 16px;

  width: 100%;
  height: 2.5rem;

  color: var(--color-grey-0);
  background-color: var(--color-grey-2);

  border: 1px solid var(--color-grey-2);

  border-radius: 4px;

  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 400;

  letter-spacing: ${({ type }) => (type === "password" ? "0.2rem" : "inherit")};

  &::placeholder {
    letter-spacing: normal;
    color: var(--color-grey-1);
  }

  &&:focus {
    background-color: var(--color-grey-2);
    border: 1px solid var(--color-grey-0);
  }

  &::-moz-focus-inner {
    background-color: var(--color-grey-2);
  }

  &:valid {
    background-color: var(--color-grey-2) !important;
  }
`;
