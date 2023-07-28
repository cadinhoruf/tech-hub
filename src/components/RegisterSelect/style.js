import styled from "styled-components";
import { Headline } from "../../../styles/Typography";

export const LabelSelect = styled.label`
  ${Headline}
  color: var(--color-grey-0);

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Select = styled.select`
  background-color: var(--color-grey-2) ;
  color: var(--color-grey-1);
  height: 2.5rem;

  border-radius: 4px;

  padding: 0 12px;

`;
