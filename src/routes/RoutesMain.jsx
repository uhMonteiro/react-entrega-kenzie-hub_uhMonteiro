import { Route , Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { HomePage } from "../pages/HomePage"
import { RegisterPage } from "../pages/RegisterPage"

export function RoutesMain(){
    return(
        <Routes>
            <Route path="/" element={ <LoginPage/> }/>
            <Route path="/homePage" element={ <HomePage/> }/>
            <Route path="/registerPage" element={ <RegisterPage/> }/>
        </Routes>
    )
}