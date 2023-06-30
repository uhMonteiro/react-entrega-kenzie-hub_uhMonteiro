import { useContext } from "react"
import { RoutesMain } from "./routes/RoutesMain"
import { UserContext } from "./providers/UserContext"

function App() {
  const { loading } = useContext(UserContext)
  return (
    <>
      {loading ? <p>Carregando...</p> : <RoutesMain/>}
    </>
  )
}

export default App
