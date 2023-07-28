import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const FormAddTec = ({ setModalOpen, setTecList }) => {
  const { register, handleSubmit } = useForm();

  const AddTec = async (formData) => {
    try {
      const token = JSON.parse(localStorage.getItem("kenzieHub@token"));
      const { data } = await api.post("users/techs/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia criada com sucesso");
      setTecList((tecList) => [...tecList, data]);
    } catch (error) {
      toast.error("Tecnologia já criada, você pode atualiza-lá");
    }
  };

  const submit = async (formData) => {
    await AddTec(formData);
    setModalOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <label htmlFor="name "></label>
      <input type="text" {...register("title")} />
      <label htmlFor="status">Selecionar status</label>
      <select name="stats" id="status" {...register("status")}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
      <button>Cadastrar tecnologia</button>
    </form>
  );
};
