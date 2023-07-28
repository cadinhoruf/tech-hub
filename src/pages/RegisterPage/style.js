import styled from "styled-components";
import { titleOne } from "../../../styles/Typography";
import { ContainerColumn } from "../LoginPage/style";

export const TitleOne = styled.h1`
  ${titleOne}
  color:var(--color-grey-0);

  text-align: center;
`;
export const Container = styled.div`
  ${ContainerColumn}
  gap: 1rem;

  padding: 2rem 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-grey-3);
    color: var(--color-grey-0);

    border-radius: 4px;
    width: 79.542px;
    height: 31.953px;

    font-size: 12px;
    font-weight: 600;
  }
`;

export const ContainerRegister = styled.div`
  ${ContainerColumn}
  gap: 1rem;
  width: 18rem;
  background-color: var(--color-grey-3);
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);

  padding: 1rem 1rem;

  border-radius: 3px;

  justify-content: center;

  @media (min-width: 1024px) {
    width: 20rem;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
  color: var(--color-primary)
  }
`;

export const HandleRegisterButton = styled.button`
  padding: 0 22px;
  border-radius: 4px;
  height: 2rem;

  background-color: var(--color-primary-disable);
  color: var(--color-grey-0);
  align-items: center;

  height: 2.5rem;

  .register-sucessful {
    color: var(--color-primary);
  }
`;
