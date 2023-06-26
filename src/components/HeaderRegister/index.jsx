import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import { ButtonHeaderRegister, HeaderRegisterStyle } from "./style"

export function HeaderRegister(){
    return(
        <HeaderRegisterStyle>
            <img src={ logo } alt="" />
            <Link to="/">
              <ButtonHeaderRegister>Voltar</ButtonHeaderRegister>
            </Link>
        </HeaderRegisterStyle>
    )
}