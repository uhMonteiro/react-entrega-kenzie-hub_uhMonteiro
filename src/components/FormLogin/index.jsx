import { Link } from "react-router-dom";
import { FormStyle } from "./style";


export function FormLogin(){
    return(
        <FormStyle action="">
            <h1>Login</h1>
            <p>Email</p>
            <input type="email" placeholder="Digite seu email"/>
            <p>Senha</p>
            <input type="password" placeholder="Digite sua senha"/>
            <Link to="/homePage">
              <button>Entrar</button>
            </Link>
            <Link to="/registerPage"> 
              <button>Cadastre-se</button>
            </Link>
        </FormStyle>
    )
}