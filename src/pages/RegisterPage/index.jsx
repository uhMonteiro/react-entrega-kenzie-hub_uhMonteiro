import { FormRegister } from "../../components/FormRegister"
import { HeaderRegister } from "../../components/HeaderRegister"
import { GlobalStyle } from "../../styles/global"
import { GlobalReset } from "../../styles/reset"
import { MainStyle } from "../LoginPage/style"

export function RegisterPage(){
    return(
        <>
          <GlobalReset/>
          <GlobalStyle/>
          <HeaderRegister/>
          <MainStyle>
          <FormRegister/>
          </MainStyle>
        </>
    )
}
