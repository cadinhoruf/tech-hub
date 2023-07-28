import styled from "styled-components";

export const ModalUpdateStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  margin: 0 auto;

  inset: 0;

  z-index: 10;

  background-color: var(--color-grey-3);

  width: 19rem;
  height: 18rem;
  top: 25%;

  box-shadow: 0px 4px 40px -10px #00000040;
`;

export const FormUpdate = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 1rem;
  gap: 1rem;

  button:nth-child(1) {
    border-radius: 4px;

    color: var(--color-grey-0);
    background-color: var(--color-primary-disable);
    padding: 0 20px;

    height: 40px;
  }

  button:nth-child(2) {
    border-radius: 4px;

    color: var(--color-grey-0);
    background-color: var(--color-grey-1);
    padding: 0 20px;

    height: 40px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
