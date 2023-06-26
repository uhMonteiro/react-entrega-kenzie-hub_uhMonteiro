import { Link, useNavigate } from "react-router-dom";
import { ButtonEnterStyle, ButtonRegisterStyle, FormStyle, H1StyleLogin, InputStyle, LabelStyle, PStyle } from "./style";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { addLoginSchema } from "./addLoginSchema";

export function FormLogin({ setUser }){
  const { register , handleSubmit, formState: { errors }} = useForm({
    resolver: zodResolver(addLoginSchema)
  })

  const navigate = useNavigate()

  async function LoginUser(formData){
    try {
      const {data} = await api.post("/sessions", formData)
      navigate("/homePage")
      localStorage.setItem("@KenzieHub:token" , data.token)
      localStorage.setItem("@KenzieHub:userId", data.user.id)
      setUser(data.user)
    } catch (error) {
      alert("Usuário inválido")
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
              <ButtonEnterStyle>Entrar</ButtonEnterStyle>
              <PStyle>Ainda não possui uma conta?</PStyle>
            <Link to="/registerPage" style={{ textDecoration: 'none' }}> 
              <ButtonRegisterStyle>Cadastre-se</ButtonRegisterStyle>
            </Link>
        </FormStyle>
    )
}