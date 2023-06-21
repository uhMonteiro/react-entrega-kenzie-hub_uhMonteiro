import { Link } from "react-router-dom";
import { HeaderLogin } from "../../components/HeaderLogin";
import { FormLogin } from "../../components/FormLogin";

export function LoginPage(){
    return(
        <body>
          <HeaderLogin/>
          <FormLogin/>
        </body>
    )
}