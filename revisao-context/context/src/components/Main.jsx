import { UserContext } from "../contextos/UserSettingsContext.jsx"
import { useContext } from "react"

function Main(){
    const { settings } = useContext(UserContext)
    const { tema, idioma, nome } = settings
    return(
        <>
            <h2 style={{ text: `${tema === "escuro" ? "black" : "white"}` }}>{idioma === "portugues" ? `Bem vindo de volta ${nome}` : `Welcome back ${nome}`}</h2>
        </>
    )
}

export default Main