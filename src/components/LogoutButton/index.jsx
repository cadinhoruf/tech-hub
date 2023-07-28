import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear()
    navigate("/");
  };

  return <button onClick={logout}>Sair</button>;
};
