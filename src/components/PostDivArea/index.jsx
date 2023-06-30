import { AddTechHome } from "../AddTechHome"
import { CardsArea } from "../CardsArea"
import { SectionPostStyle } from "./style"


export function PostDivArea(){
    return(
        <SectionPostStyle>
            <AddTechHome/>
            <CardsArea/>
        </SectionPostStyle>
    )
}