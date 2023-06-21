import { Link } from "react-router-dom";


export function FormLogin(){
    return(
        <form action="">
            <h1>Login</h1>
            <p>Email</p>
            <input type="email" />
            <p>Senha</p>
            <input type="password" />
            <button>Entrar</button>
            <Link to="/registerPage"> 
              <button>Cadastre-se</button>
            </Link>
        </form>
    )
}