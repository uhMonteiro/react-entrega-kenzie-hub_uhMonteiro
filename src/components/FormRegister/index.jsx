import { FormStyle } from "../FormLogin/style";


export function FormRegister(){
    return(
        <FormStyle action="">
            <h1>Crie sua conta</h1>
            <p>Rapido e grátis, vamos nessa</p>
            <p>Nome</p>
            <input type="text" placeholder="Digite aqui seu nome"/>
            <p>Email</p>
            <input type="email" placeholder="Digite aqui seu email"/>
            <p>Senha</p>
            <input type="password" placeholder="Digite aqui sua senha"/>
            <p>Confirmar Senha</p>
            <input type="password" placeholder="Digite novamente sua senha"/>
            <p>Bio</p>
            <input type="text" placeholder="Fale sobre você"/>
            <p>Contato</p>
            <input type="text" placeholder="Opção de contato"/>
            <p>Selecionar módulo</p>
            <select name="" id="">
                <option value="">Primeiro Módulo</option>
            </select>
        </FormStyle>
    )
}