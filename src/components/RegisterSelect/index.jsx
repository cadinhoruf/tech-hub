import { LabelSelect, Select } from "./style";

export const RegisterSelect = ({ register }) => {
  return (
    <LabelSelect htmlFor="course_module">
      Selecionar Módulo
      <Select {...register("course_module")}>
        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
        <option value="Segundo módulo (Frontend Avançado)" >Segundo módulo</option>
        <option value="Terceiro módulo (Introdução ao Backend)" >Terceiro módulo</option>
        <option value="Quarto módulo (Backend Avançado)" >Quarto módulo</option>
      </Select>
    </LabelSelect>
  );
};