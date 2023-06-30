import { HeaderLogin } from "../../components/HeaderLogin"
import { FormLogin } from "../../components/FormLogin"
import { GlobalReset } from "../../styles/reset"
import { GlobalStyle } from "../../styles/global"
import { MainStyle } from "./style"

export function LoginPage(){
    return(
      <>
        <GlobalReset/>
        <GlobalStyle/>
        <HeaderLogin/>
        <MainStyle>
        <FormLogin/>
        </MainStyle>
      </>
    )
}