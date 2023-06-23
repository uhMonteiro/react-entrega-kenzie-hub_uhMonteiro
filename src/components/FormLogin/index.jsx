import { Link } from "react-router-dom";
import { FormStyle, H1StyleLogin, InputStyle, LabelStyle } from "./style";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";


export function FormLogin(){
  const { register , handleSubmit} = useForm()

  async function LoginUser(formData){
    try {
      const {data} = await api.post("/sessions", formData)
      console.log(data)
    } catch (error) {
      console.log("erro")
    }
  }

  async function submit(formData){
    LoginUser(formData)
  }

  

    return(
        <FormStyle onSubmit={handleSubmit(submit)}>
            <H1StyleLogin>Login</H1StyleLogin>
            <LabelStyle>Email
              <InputStyle 
              type="email" 
              placeholder="Digite seu email"
              required
              {...register("email")}/>
            </LabelStyle>
            <LabelStyle>Senha
              <InputStyle 
              type="password" 
              placeholder="Digite sua senha"
              required
              {...register("password")}/>
            </LabelStyle>
              <button>Entrar</button>
            <Link to="/registerPage"> 
              <button>Cadastre-se</button>
            </Link>
        </FormStyle>
    )
}