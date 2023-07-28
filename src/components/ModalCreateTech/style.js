import styled from "styled-components";

export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  margin: 0 auto;

  inset: 0;

  z-index: 10;

  background-color: var(--color-grey-3);

  padding: 1rem;
`;

export const HeaderModal = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100%;

  background-color: var(--color-grey-2);

  img {
    cursor: pointer;
  }
`;
