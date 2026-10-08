import { createContext, useState } from "react"

const UserContext = createContext(null)

function UserSettingsContext({children}) {
    const initialSettings = {
        tema: "",
        idioma: "",
        nome: ""
    }

    const [settings, setSettings] = useState(initialSettings)

    return (
        <>
            <UserContext value={{settings, setSettings}}>
                {children}
            </UserContext>
        </>
    )
}

export { UserSettingsContext, UserContext }