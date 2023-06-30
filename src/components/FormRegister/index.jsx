import { useForm } from "react-hook-form"
import { ButtonEnterStyle, FormStyle, H1StyleLogin, InputStyle, LabelStyle, PStyle } from "../FormLogin/style"
import { zodResolver } from "@hookform/resolvers/zod"
import { addRegisterSchema } from "./addRegisterSchema"
import { SelectSTyle } from "./style"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"


export function FormRegister(){
    const { register , handleSubmit , formState: { errors} , reset} = useForm({
      resolver: zodResolver(addRegisterSchema)
    })

    const { createUser } = useContext(UserContext)

    async function submit(formData){
      createUser(formData)
      reset()
    }

    return(
        <FormStyle onSubmit={handleSubmit(submit)} noValidate>
            <H1StyleLogin>Crie sua conta</H1StyleLogin>
            <PStyle>Rapido e grátis, vamos nessa</PStyle>
            <LabelStyle>Nome
              <InputStyle 
              type="text" 
              placeholder="Digite aqui seu nome"
              {...register("name")}/>
              {errors.name?.message}
            </LabelStyle>
            <LabelStyle>Email
              <InputStyle 
              type="email" 
              placeholder="Digite aqui seu email"
              {...register("email")}/>
              {errors.email?.message}
            </LabelStyle>
            <LabelStyle>Senha
              <InputStyle 
              type="password" 
              placeholder="Digite aqui sua senha"
              {...register("password")}/>
              {errors.password?.message}
            </LabelStyle>
            <LabelStyle>Confirmar Senha
              <InputStyle 
              type="password" 
              placeholder="Digite novamente sua senha"
              {...register("confirmedPassword")}/>
              {errors.confirmedPassword?.message}
            </LabelStyle>
            <LabelStyle>Bio
              <InputStyle 
              type="text" 
              placeholder="Fale sobre você"
              {...register("bio")}/>
              {errors.bio?.message}
            </LabelStyle>
            <LabelStyle>Contato
              <InputStyle 
              type="text" 
              placeholder="Opção de contato"
              {...register("contact")}/>
              {errors.contact?.message}
            </LabelStyle>
            <LabelStyle>Selecionar módulo
              <SelectSTyle name="" id="" {...register("course_module")}>
                  <option value="Primeiro módulo">Primeiro módulo</option>
                  <option value="Segundo módulo">Segundo módulo</option>
                  <option value="Terceiro módulo">Terceiro módulo</option>
                  <option value="Quarto módulo">Quarto módulo</option>
              </SelectSTyle>
            </LabelStyle>
            <ButtonEnterStyle>Cadastrar</ButtonEnterStyle>
        </FormStyle>
    )
}