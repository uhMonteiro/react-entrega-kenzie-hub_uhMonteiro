import { Link } from "react-router-dom";
import { FormStyle, H1StyleLogin, InputStyle, LabelStyle } from "./style";


export function FormLogin(){
    return(
        <FormStyle action="">
            <H1StyleLogin>Login</H1StyleLogin>
            <LabelStyle>Email
              <InputStyle type="email" placeholder="Digite seu email"/>
            </LabelStyle>
            <LabelStyle>Senha
              <InputStyle type="password" placeholder="Digite sua senha"/>
            </LabelStyle>
            <Link to="/homePage">
              <button>Entrar</button>
            </Link>
            <Link to="/registerPage"> 
              <button>Cadastre-se</button>
            </Link>
        </FormStyle>
    )
}