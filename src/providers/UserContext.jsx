import { useState } from "react"
import { createContext } from "react"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"

export const UserContext = createContext({})

export function UserProvider({ children }){
    const [ user , setUser] = useState([])

    const navigate = useNavigate()

    async function LoginUser(formData){
      try {
        const {data} = await api.post("/sessions", formData)
        navigate("/homePage")
        localStorage.setItem("@KenzieHub:token" , data.token)
        localStorage.setItem("@KenzieHub:userId", data.user.id)
        setUser(data.user)
      } catch (error) {
        alert("Usuário inválido")
      }
    }

    function userLogout(){
        localStorage.removeItem("@KenzieHub:token")
        localStorage.removeItem("@KenzieHub:userId")
        setUser([])
        navigate("/")
    }

    async function createUser(formData){
        try {
          const {data} = await api.post("/users", formData)
          navigate("/")
        } catch (error) {
          alert("Dados inválidos")
        }
    }

    return(
        <UserContext.Provider value={{ user, setUser, LoginUser, userLogout, createUser}}>
            { children }
        </UserContext.Provider>
    )
}