import { useState } from "react"

function Settings() {
    return (
        <>
            <label htmlFor="tema" style={{ display: "flex" }}>
                Tema
                <select name="tema" id="tema" onChange={(e) => console.log(e.target.value)}>
                    <option value="claro">claro</option>
                    <option value="escuro">escuro</option>
                </select>
            </label>
            <label htmlFor="">
                Idioma
                <select name="idioma" id="">
                    <option value="portugues">portugues</option>
                    <option value="ingles">ingles</option>
                </select>
            </label>
            <label htmlFor="nome">
                Nome
                <input name="nome" type="text" id="nome" />
            </label>
        </>
    )
}

export default Settings