import { z } from "zod"

export const addRegisterSchema = z.object({
    name: 
      z.string()
      .nonempty("O nome é obrigatório")
      .min(2,"o nome precisa de pelo menos 2 carácteres"),
      
    email: 
      z.string()
      .nonempty("o email é obrigatório")
      .email("É necessario ser um email"),

    password: 
      z.string()
      .nonempty("A senha é obrigatória")
      .min(8 , "A senha precisa no mínimo de 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .regex(/[^a-zA-Z 0-9]+/g, "É necessário pelo menos 1 caractere especial"),

    confirmedPassword: 
      z.string()
      .nonempty("É preciso confirmar a senha"),

    bio: 
      z.string()
      .nonempty("A bio é obrigatória")
      .min(10 , "A bio precisa no mínimo de 10 caracteres"),

    contact: 
      z.string()
      .nonempty("O contato é obrigatório"),

    course_module:
    z.string()
    
}).refine(({ password , confirmedPassword}) => confirmedPassword === password,{
    message: "A confirmação precisa ser igual a senha",
    path: ["confirmedPassword"]
})
    


