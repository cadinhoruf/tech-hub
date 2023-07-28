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

  width: 19rem;
  height: 19rem;
  top: 25%;

  box-shadow: 0px 4px 40px -10px #00000040;
`;

export const HeaderModal = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top-right-radius: 4px;
  border-top-left-radius: 4px;

  width: 100%;
  height: 45px;

  padding: 0 1rem;

  background-color: var(--color-grey-2);
  color: var(--color-grey-0);

  font-size: 14px;
  font-weight: 700;

  img {
    cursor: pointer;
  }
`;
