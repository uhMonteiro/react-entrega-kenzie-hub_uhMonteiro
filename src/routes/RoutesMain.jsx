import { Route , Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { HomePage } from "../pages/HomePage"
import { RegisterPage } from "../pages/RegisterPage"
import { useState } from "react"

export function RoutesMain(){
    const [ user , setUser] = useState([])
    console.log(user)

    return(
        <Routes>
            <Route path="/" element={ <LoginPage setUser={ setUser }/> }/>
            <Route path="/homePage" element={ <HomePage user={ user }/> }/>
            <Route path="/registerPage" element={ <RegisterPage/> }/>
        </Routes>
    )
}