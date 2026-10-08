function Main(){
    return(
        <>
            <h2 style={{ text: `${tema === "escuro" ? "black" : "white"}` }}>{idioma === "portugues" ? `Bem vindo de volta Fulano ${nome}` : `Welcome back ${nome}`}</h2>
        </>
    )
}

export default Main