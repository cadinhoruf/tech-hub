import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { LoginForm } from "../../components/LoginForm";
import { RegisterContainer, FormContainer, LoginStyled, StyledParagraph, StyledProject} from "./style";

export const LoginPage = () => {
  return (
    <StyledProject>
      <h3>Tech Hub</h3>
      <FormContainer>
        <LoginStyled>Login</LoginStyled>
        <LoginForm />
        <RegisterContainer>
          <StyledParagraph>Ainda não possui uma conta?</StyledParagraph>
        </RegisterContainer>
        <Link to="/register">Cadastrar-se</Link>
      </FormContainer>
    </StyledProject>
  );
};
