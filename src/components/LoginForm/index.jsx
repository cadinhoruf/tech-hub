import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { EntryButton, LoginFormStyled } from "./style";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { formLoginSchema } from "../FormLoginSchema";

export const LoginForm = () => {
  const { register, handleSubmit, reset, formState: { errors }} = useForm({
    resolver: zodResolver(formLoginSchema),
  });

  const { handleLogin } = useContext(UserContext);

  const submit = async (formData) => {
    await handleLogin(formData);
    reset();
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit(submit)}>
      <Input label="Email" type="email" id="email" {...register("email")} />
      {errors.email ? <p>{errors.email.message}</p> : null}
      <Input
        label="Senha"
        type="password"
        id="password"
        {...register("password")}
      />
      {errors.password ? <p>{errors.password.message}</p> : null}
      <EntryButton>Entrar</EntryButton>
    </LoginFormStyled>
  );
};
