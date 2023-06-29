import { Link } from "react-router-dom";
import { ButtonEnterStyle, ButtonRegisterStyle, FormStyle, H1StyleLogin, InputStyle, LabelStyle, PStyle } from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { addLoginSchema } from "./addLoginSchema";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export function FormLogin(){
  
  const { register , handleSubmit, formState: { errors }} = useForm({
    resolver: zodResolver(addLoginSchema)
  })
  
  const { LoginUser } = useContext(UserContext)

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