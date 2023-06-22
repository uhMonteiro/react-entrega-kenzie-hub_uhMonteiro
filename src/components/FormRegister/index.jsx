import { FormStyle, LabelStyle } from "../FormLogin/style";


export function FormRegister(){
    return(
        <FormStyle action="">
            <h1>Crie sua conta</h1>
            <p>Rapido e grátis, vamos nessa</p>
            <LabelStyle>Nome
              <input type="text" placeholder="Digite aqui seu nome"/>
            </LabelStyle>
            <LabelStyle>Email
              <input type="email" placeholder="Digite aqui seu email"/>
            </LabelStyle>
            <LabelStyle>Senha
              <input type="password" placeholder="Digite aqui sua senha"/>
            </LabelStyle>
            <LabelStyle>Confirmar Senha
              <input type="password" placeholder="Digite novamente sua senha"/>
            </LabelStyle>
            <LabelStyle>Bio
              <input type="text" placeholder="Fale sobre você"/>
            </LabelStyle>
            <LabelStyle>Contato
              <input type="text" placeholder="Opção de contato"/>
            </LabelStyle>
            <LabelStyle>Selecionar módulo
              <select name="" id="">
                  <option value="">Primeiro Módulo</option>
              </select>
            </LabelStyle>
        </FormStyle>
    )
}