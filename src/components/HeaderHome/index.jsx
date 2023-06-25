import {  useNavigate } from "react-router-dom"
import logo from "../../assets/logo.svg"

export function HeaderHome(){
    const navigate = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault()
        localStorage.removeItem("@KenzieHub:token")
        localStorage.removeItem("@KenzieHub:userId")
        navigate("/")
    }

    return(
        <header>
            <img src={logo} alt="" />
              <button onClick={handleSubmit}>Sair</button>
        </header>
    )
}