import { Link } from "react-router-dom";
import { HeaderLogin } from "../../components/HeaderLogin";
import { FormLogin } from "../../components/FormLogin";
import { GlobalReset } from "../../styles/reset";
import { GlobalStyle } from "../../styles/global";
import { MainLoginStyle } from "./style";

export function LoginPage(){
    return(
      <>
        <GlobalReset/>
        <GlobalStyle/>
        <HeaderLogin/>
        <MainLoginStyle>
        <FormLogin/>
        </MainLoginStyle>
      </>
    )
}