import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechsContext } from "../providers/TechsContext";
import { Input } from "../components/Input";
import { FormAddTecStyled, ParagraphZod, SelectContainer } from "./style";
import { formCreateTechSchema } from "../ModalCreateTech/FormCreateTechSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const FormAddTec = ({ setModalOpen }) => {
  const { addTech } = useContext(TechsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formCreateTechSchema) });

  const submit = async (formData) => {
    addTech(formData);
    setModalOpen(false);
  };

  return (
    <FormAddTecStyled className="" onSubmit={handleSubmit(submit)}>
      <Input type="text" id="title" label="Nome" {...register("title")} />
      {errors.title ? <ParagraphZod>{errors.title.message}</ParagraphZod> : null}
      <SelectContainer>
        <label htmlFor="status">Selecionar status</label>
        <select name="stats" id="status" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </SelectContainer>
      <button>Cadastrar tecnologia</button>
    </FormAddTecStyled>
  );
};
