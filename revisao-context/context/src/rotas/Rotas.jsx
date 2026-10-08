import { BrowserRouter, Routes, Route } from "react-router";
import MainPage from "../pages/MainPage.jsx";
import Settings from "../pages/Settings.jsx";
import Layout from "../pages/Layout.jsx";
import { UserSettingsContext } from "../contextos/UserSettingsContext.jsx"

function Rotas() {
    return (
        <>
            <UserSettingsContext>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/layout" element={<Layout />} />
                    </Routes>
                </BrowserRouter>
            </UserSettingsContext>
        </>
    )
}

export default Rotas