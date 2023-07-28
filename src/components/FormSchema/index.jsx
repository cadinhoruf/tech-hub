import { z } from "zod";

export const formRegisterSchema = z.object({
  name: z
    .string()
    .min(3, "O nome é obrigatório e precisa conter no mínimo 3 caracteres."),
  email: z
    .string()
    .min(1, "O e-mail é obrigatório.")
    .email("Forneça um e-mail válido."),
  password: z
    .string()
    .min(8, "A senha precisa conter no mínimo 8 caracteres.")
    .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
});
