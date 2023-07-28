import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { formRegisterSchema } from "../FormRegisterSchema/formRegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSelect } from "../RegisterSelect";
import { FormRegisterStyled } from "./style";
import { HandleRegisterButton } from "../../pages/RegisterPage/style";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formRegisterSchema),
  });

  const submit = handleSubmit(async (formData) => {
    await handleRegister(formData);
    setIsDirty(true);
  });

  const { handleRegister } = useContext(UserContext);

  return (
    <FormRegisterStyled onSubmit={handleSubmit(submit)}>
      <Input
        type="text"
        id="name"
        placeholder="Digite aqui seu nome "
        label="Nome "
        {...register("name")}
      />
      {errors.name ? <p>{errors.name.message}</p> : null}
      <Input
        type="email"
        id="email"
        placeholder="Digite aqui seu email "
        label="Email "
        {...register("email")}
      />
      {errors.email ? <p>{errors.email.message}</p> : null}
      <Input
        type="password"
        id="password"
        placeholder="Digite aqui sua senha "
        label="Senha "
        {...register("password")}
      />
      {errors.password ? <p>{errors.password.message}</p> : null}
      <Input
        type="password"
        id="confirmPassword"
        placeholder="Digite novamente sua senha "
        label="Confirmar senha "
        {...register("confirm")}
      />
      {errors.confirm ? <p>{errors.confirm.message}</p> : null}
      <Input
        type="text"
        id="bio"
        placeholder="Fale sobre você "
        label="Bio "
        {...register("bio")}
      />
      {errors.bio ? <p>{errors.bio.message}</p> : null}
      <Input
        type="text"
        id="contact"
        placeholder="Opção de contato "
        label="Contato "
        {...register("contact")}
      />
      {errors.contact ? <p>{errors.contact.message}</p> : null}
      <RegisterSelect register={register} />
      <HandleRegisterButton
        type="submit"
      >
        Cadastrar
      </HandleRegisterButton>
    </FormRegisterStyled>
  );
};
