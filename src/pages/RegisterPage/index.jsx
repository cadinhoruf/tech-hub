import { FormRegister } from "../../components/FormRegister";
import { Container, ContainerRegister, ImgContainer, TitleOne } from "./style";
import { StyledParagraph } from "../LoginPage/style";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <Container>
      <ImgContainer>
      <h3>Tech Hub</h3>
      <Link to="/">Voltar</Link>
      </ImgContainer>
      <ContainerRegister>
        <TitleOne>Crie sua conta</TitleOne>
        <StyledParagraph>Rapido e grátis, vamos nessa</StyledParagraph>
        <FormRegister />
      </ContainerRegister>
    </Container>
  );
};
