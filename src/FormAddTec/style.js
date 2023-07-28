import styled from "styled-components";
import { Headline, HeadlineBold } from "../../styles/Typography";

export const FormAddTecStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  padding: 1rem;

  button {
    background-color: var(--color-primary);
    color: var(--color-grey-0);

    width: 100%;
    height: 2.5rem;

    border-radius: 4px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  select {
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
  }
  label {
    ${Headline}
    color: var(--color-grey-0);
  }
`;

export const ParagraphZod = styled.p`
  ${HeadlineBold}
  font-size: 11px;
  color: var(--color-grey-1);
`;
