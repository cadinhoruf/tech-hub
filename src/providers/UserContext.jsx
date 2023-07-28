import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setModalOpen] = useState(false);

  const currentPath = window.location.pathname;

  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      localStorage.setItem("kenzieHub@token", JSON.stringify(data.token));
      localStorage.setItem("kenzieHub@userID", JSON.stringify(data.user.id));
      setUser(data.user);
      toast.success("Login feito com sucesso",{
        autoClose: 1000
      }) 
    } catch (error) {
      toast.error("Usuário ou senha incorretos");
    }
  };

  const handleRegister = async (formData) => {
    try {
      await api.post("/users", formData);
      toast.success("Usuário criado com sucesso");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      const responseError = error.response.data.message;
      console.log(responseError);
      if (responseError === "Email already exists") {
        toast.error("Email já existente !");
      } else {
        toast.error("Ops, aconteceu algo, reveja os campos");
      }
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("kenzieHub@userID");
    localStorage.removeItem("kenzieHub@token");
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("kenzieHub@token"));

    const loadUser = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate(currentPath);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      loadUser();
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        handleLogin,
        handleRegister,
        handleLogout,
        loading,
        isOpen,
        setModalOpen,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
