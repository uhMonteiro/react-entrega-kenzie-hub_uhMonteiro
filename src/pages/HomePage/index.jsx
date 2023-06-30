import { HeaderHome } from "../../components/HeaderHome"
import { NameDivHome } from "../../components/NameDivHome"
import { PostDivArea } from "../../components/PostDivArea"
import { GlobalStyle } from "../../styles/global"
import { GlobalReset } from "../../styles/reset"

export function HomePage(){
    return(
        <>
          <GlobalReset/>
          <GlobalStyle/>
          <HeaderHome/>
          <main>
          <NameDivHome/>
          <PostDivArea/>
          </main>
        </>
    )
}