import styled from "styled-components";
import { HeadlineBold } from "../../../styles/Typography";

export const FormRegisterStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p{
    ${HeadlineBold}
    font-size: 11px;
    color: var(--color-grey-1);
  }
`;
