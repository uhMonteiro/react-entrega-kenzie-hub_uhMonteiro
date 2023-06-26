import { H1StyleLogin, PStyle } from "../FormLogin/style";
import { SectionHomeStyle } from "./style";


export function NameDivHome({ user }){
    return(
        <SectionHomeStyle>
            <H1StyleLogin>Olá, {user.name}</H1StyleLogin>
            <PStyle>{user.course_module} </PStyle>
        </SectionHomeStyle>
    )
}