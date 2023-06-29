import { useContext } from "react";
import { H1StyleLogin, PStyle } from "../FormLogin/style";
import { SectionHomeStyle } from "./style";
import { UserContext } from "../../providers/UserContext";


export function NameDivHome(){
    const { user } = useContext(UserContext)

    return(
        <SectionHomeStyle>
            <H1StyleLogin>Olá, {user.name}</H1StyleLogin>
            <PStyle>{user.course_module} </PStyle>
        </SectionHomeStyle>
    )
}