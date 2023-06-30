import { Route , Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { HomePage } from "../pages/HomePage"
import { RegisterPage } from "../pages/RegisterPage"
import { ProtectedRoutes } from "../components/ProtectedRoutes"
import { PublicRoutes } from "../components/PublicRoutes"

export function RoutesMain(){
    return(
        <Routes>
            <Route element={ <PublicRoutes/> }>
              <Route path="/" element={ <LoginPage /> }/>
              <Route path="/registerPage" element={ <RegisterPage/> }/>
            </Route>
           
            <Route element={ <ProtectedRoutes/> }>
              <Route path="/homePage" element={ <HomePage /> }/>
            </Route>
        </Routes>
    )
}