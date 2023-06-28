import { AddTechHome } from "../AddTechHome";
import { CardsArea } from "../CardsArea";
import { H2PostStyle, PStylePost, SectionPostStyle } from "./style";


export function PostDivArea(){
    return(
        <SectionPostStyle>
            <AddTechHome/>
            <CardsArea/>
        </SectionPostStyle>
    )
}