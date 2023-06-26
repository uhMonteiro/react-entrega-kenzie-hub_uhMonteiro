import {  useNavigate } from "react-router-dom"
import logo from "../../assets/logo.svg"
import { ButtonHeaderHome, HeaderHomeStyle } from "./style"

export function HeaderHome(){
    const navigate = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault()
        localStorage.removeItem("@KenzieHub:token")
        localStorage.removeItem("@KenzieHub:userId")
        navigate("/")
    }

    return(
        <HeaderHomeStyle>
            <img src={logo} alt="" />
              <ButtonHeaderHome onClick={handleSubmit}>Sair</ButtonHeaderHome>
        </HeaderHomeStyle>
    )
}