import sum from "../../assets/sum.svg"
import { DivTechStyle, H2Style, ImgStyle } from "./style"
 
 export function AddTechHome(){
    return(
        <DivTechStyle>
            <H2Style>Tecnologias</H2Style>
            <ImgStyle>
               <img src={sum} alt="" />
            </ImgStyle>
        </DivTechStyle>
    )
  }