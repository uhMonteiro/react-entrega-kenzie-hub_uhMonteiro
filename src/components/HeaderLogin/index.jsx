import logo from "../../assets/logo.svg"
import { StyleHeaderLogin } from "./style"

export function HeaderLogin(){
    return(
        <StyleHeaderLogin>
            <img src={logo} alt="" />
        </StyleHeaderLogin>
    )
}