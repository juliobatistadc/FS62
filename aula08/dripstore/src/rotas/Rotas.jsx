import { BrowserRouter, Route, Routes } from "react-router"
import Home from "../pages/Home.jsx"
import Register from "../pages/Register.jsx"

function Rotas(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="cadastrar" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rotas