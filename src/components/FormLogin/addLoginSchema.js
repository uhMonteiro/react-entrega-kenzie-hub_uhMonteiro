import { z } from "zod"

export const addLoginSchema = z.object({
    email:
    z.string()
    .nonempty("Este campo é obrigatório")
    .email("Precisa ser um email"),
    password:
    z.string()
    .nonempty("Este campo é obrigatório"),
})