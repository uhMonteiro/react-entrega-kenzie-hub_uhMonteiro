import { useContext } from "react"
import logo from "../../assets/logo.svg"
import { ButtonHeaderHome, HeaderHomeStyle } from "./style"
import { UserContext } from "../../providers/UserContext"

export function HeaderHome(){
    const {userLogout} = useContext(UserContext)

    return(
        <HeaderHomeStyle>
            <img src={logo} alt="" />
              <ButtonHeaderHome onClick={userLogout}>Sair</ButtonHeaderHome>
        </HeaderHomeStyle>
    )
}