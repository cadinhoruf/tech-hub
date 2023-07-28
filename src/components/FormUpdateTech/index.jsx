import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechsContext } from "../../providers/TechsContext";
import { ButtonContainer, FormUpdate } from "./style";
import { Input } from "../Input";
import { SelectContainer } from "../../FormAddTec/style";

export const FormUpdateTech = () => {
  const {
    register,
    handleSubmit
  } = useForm();

  const { updateTech, techID, techName, setIsUpdateOpen, deleteTech } =
    useContext(TechsContext);

  const submit = (formData) => {
    updateTech(techID, formData);
    setIsUpdateOpen(false);
  };

  const handleDelete = () => {
    deleteTech(techID);
    setIsUpdateOpen(false);
  };

  return (
    <FormUpdate onSubmit={handleSubmit(submit)}>
      <Input type="text" label="Nome" value={techName} disabled />
      <SelectContainer>
        <label htmlFor="status">Status</label>
        <select name="status" id="status" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </SelectContainer>
      <ButtonContainer>
        <button type="submit">Salvar alterações</button>
        <button onClick={handleDelete}>Excluir</button>
      </ButtonContainer>
    </FormUpdate>
  );
};
