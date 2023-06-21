import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"

export function HeaderRegister(){
    return(
        <header>
            <img src={ logo } alt="" />
            <Link to="/">
              <button>Voltar</button>
            </Link>
        </header>
    )
}