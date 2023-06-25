import { Link, useNavigate } from "react-router-dom";
import { FormStyle, H1StyleLogin, InputStyle, LabelStyle } from "./style";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { addLoginSchema } from "./addLoginSchema";


export function FormLogin(){
  const { register , handleSubmit, formState: { errors }} = useForm({
    resolver: zodResolver(addLoginSchema)
  })

  const navigate = useNavigate()

  async function LoginUser(formData){
    try {
      const {data} = await api.post("/sessions", formData)
      navigate("/homePage")
      console.log(data)
    } catch (error) {
      alert("Usuário inválido")
    }
  }

  async function submit(formData){
    console.log(formData)
    LoginUser(formData)
  }

  

    return(
        <FormStyle onSubmit={handleSubmit(submit)}>
            <H1StyleLogin>Login</H1StyleLogin>
            <LabelStyle>Email
              <InputStyle 
              type="email" 
              placeholder="Digite seu email"
              {...register("email")}/>
              {errors.email?.message}
            </LabelStyle>
            <LabelStyle>Senha
              <InputStyle 
              type="password" 
              placeholder="Digite sua senha"
              {...register("password")}/>
              {errors.password?.message}
            </LabelStyle>
              <button>Entrar</button>
            <Link to="/registerPage"> 
              <button>Cadastre-se</button>
            </Link>
        </FormStyle>
    )
}