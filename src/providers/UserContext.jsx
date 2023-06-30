import { useState } from "react"
import { createContext } from "react"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const UserContext = createContext({})

export function UserProvider({ children }){
    const [ user , setUser] = useState(null)
    const [ loading, setLoading] = useState(false)

    const currentPath = window.location.pathname

    useEffect(() =>{
      const token = localStorage.getItem("@KenzieHub:token")

      const loadUser = async() =>{
        try {
          setLoading(true)
          const {data} = await api.get("/profile",{
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          setUser(data)
          navigate(currentPath)
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
      }

      if(token){
        loadUser()
      }

    }, [])

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
        setUser(null)
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
        <UserContext.Provider value={{ user, setUser, LoginUser, userLogout, createUser, loading}}>
            { children }
        </UserContext.Provider>
    )
}