import { useForm } from "react-hook-form"
import { FormStyle, LabelStyle } from "../FormLogin/style"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { addRegisterSchema } from "./addRegisterSchema"


export function FormRegister(){
    const { register , handleSubmit , formState: { errors} , reset} = useForm({
      resolver: zodResolver(addRegisterSchema)
    })

    const navigate = useNavigate()

    async function createUser(formData){
      try {
        const {data} = await api.post("/users", formData)
        navigate("/")
        console.log(data)
      } catch (error) {
        alert("Dados inválidos")
      }
    }

    async function submit(formData){
      createUser(formData)
      reset()
    }

    return(
        <FormStyle onSubmit={handleSubmit(submit)} noValidate>
            <h1>Crie sua conta</h1>
            <p>Rapido e grátis, vamos nessa</p>
            <LabelStyle>Nome
              <input 
              type="text" 
              placeholder="Digite aqui seu nome"
              {...register("name")}/>
              {errors.name?.message}
            </LabelStyle>
            <LabelStyle>Email
              <input 
              type="email" 
              placeholder="Digite aqui seu email"
              {...register("email")}/>
              {errors.email?.message}
            </LabelStyle>
            <LabelStyle>Senha
              <input 
              type="password" 
              placeholder="Digite aqui sua senha"
              {...register("password")}/>
              {errors.password?.message}
            </LabelStyle>
            <LabelStyle>Confirmar Senha
              <input 
              type="password" 
              placeholder="Digite novamente sua senha"
              {...register("confirmedPassword")}/>
              {errors.confirmedPassword?.message}
            </LabelStyle>
            <LabelStyle>Bio
              <input 
              type="text" 
              placeholder="Fale sobre você"
              {...register("bio")}/>
              {errors.bio?.message}
            </LabelStyle>
            <LabelStyle>Contato
              <input 
              type="text" 
              placeholder="Opção de contato"
              {...register("contact")}/>
              {errors.contact?.message}
            </LabelStyle>
            <LabelStyle>Selecionar módulo
              <select name="" id="" {...register("course_module")}>
                  <option value="Primeiro módulo">Primeiro módulo</option>
                  <option value="Segundo módulo">Segundo módulo</option>
                  <option value="Terceiro módulo">Terceiro módulo</option>
                  <option value="Quarto módulo">Quarto módulo</option>
              </select>
            </LabelStyle>
            <button>Cadastrar</button>
        </FormStyle>
    )
}