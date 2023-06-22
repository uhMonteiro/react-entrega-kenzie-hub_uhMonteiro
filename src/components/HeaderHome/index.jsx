import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"

export function HeaderHome(){
    return(
        <header>
            <img src={logo} alt="" />
            <Link to="/">
              <button>Sair</button>
            </Link>
        </header>
    )
}