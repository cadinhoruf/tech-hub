import Logo from "../../assets/Logo.svg";
import { LoginForm } from "../../components/LoginForm";
import { RegisterContainer } from "./style";

export const LoginPage = () => {
  return (
    <div>
    <img src={Logo} alt="Kenzie Hub" />
        <LoginForm /> 
        <RegisterContainer>
          <p>Ainda não possui uma conta?</p>
          <button>Cadastre-se</button>
        </RegisterContainer>
      </div>
  );
};
