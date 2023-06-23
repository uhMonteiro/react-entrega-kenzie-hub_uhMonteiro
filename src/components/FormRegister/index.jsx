import { useForm } from "react-hook-form";
import { FormStyle, LabelStyle } from "../FormLogin/style";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";


export function FormRegister(){
    const { register , handleSubmit , reset} = useForm()

    const navigate = useNavigate()

    async function createUser(formData){
      try {
        const {data} = await api.post("/users", formData)
        navigate("/")
        console.log(data)
      } catch (error) {
        console.log("erro")
      }
    }

    async function submit(formData){
      createUser(formData)
      reset()
    }

    return(
        <FormStyle onSubmit={handleSubmit(submit)}>
            <h1>Crie sua conta</h1>
            <p>Rapido e grátis, vamos nessa</p>
            <LabelStyle>Nome
              <input 
              type="text" 
              placeholder="Digite aqui seu nome"
              required
              {...register("name")}/>
            </LabelStyle>
            <LabelStyle>Email
              <input 
              type="email" 
              placeholder="Digite aqui seu email"
              required
              {...register("email")}/>
            </LabelStyle>
            <LabelStyle>Senha
              <input 
              type="password" 
              placeholder="Digite aqui sua senha"
              required
              {...register("password")}/>
            </LabelStyle>
            <LabelStyle>Confirmar Senha
              <input 
              type="password" 
              placeholder="Digite novamente sua senha"
              required
              {...register("confirmedPassword")}/>
            </LabelStyle>
            <LabelStyle>Bio
              <input 
              type="text" 
              placeholder="Fale sobre você"
              required
              {...register("bio")}/>
            </LabelStyle>
            <LabelStyle>Contato
              <input 
              type="text" 
              placeholder="Opção de contato"
              required
              {...register("contact")}/>
            </LabelStyle>
            <LabelStyle>Selecionar módulo
              <select name="" id="" {...register("course_module")} required>
                  <option value="">Selecionar Modulo</option>
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