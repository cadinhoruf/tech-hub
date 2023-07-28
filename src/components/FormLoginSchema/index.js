import { z } from "zod";

export const formLoginSchema = z.object({
  email: z.string().min(1,"Preencha este campo com um e-mail").email("Forneça um e-mail válido."),
  password: z.string().min(1, "A senha é necessária.")
});
