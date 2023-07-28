import { z } from "zod";

export const formCreateTechSchema = z.object({
  title: z
  .string()
  .min(1,"É obrigatório ter um nome da tecnologia !"),
  status : z
  .string()
})