import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const {data} = await api.post("/sessions", formData)
      localStorage.setItem('kenzieHub@token', JSON.stringify(data.token))
      localStorage.setItem('kenzieHub@userID', JSON.stringify(data.user.id))
      navigate("/home")
    } catch (error) {
      console.log(error)
    }
  }
  
  const submit = async (formData) => {
    await handleLogin(formData)
    reset()
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <label htmlFor="email">Email</label>
      <input type="email" {...register("email")}/>
      <label htmlFor="password">Senha</label>
      <input type="password" {...register("password")}/>
      <button>Entrar</button>
    </form>
  );
};
