import { useEffect, useRef, useState } from "react"

function Filter() {
    const [change, setChange] = useState(false)
    const formulario = useRef(null)
    useEffect(() => {

    }, [formulario, change])

    function enviarDados(){
        const form = formulario.current
        console.log(form)
    }

    const etiquetas = [
        "Adidas",
        "Calenciaga",
        "K-Swiss",
        "Nike",
        "Puma",
        "Casual",
        "Utilitario",
        "Esporte e lazer",
        "Corrida",
        "Masculino",
        "Feminino",
        "Unissex",
        "Novo",
        "Usado"
    ]

    return (
        <>
            <aside>
                <form ref={formulario} className="flex flex-col items-start" onSubmit={() => {enviarDados()}}>
                    {
                        etiquetas.map((item, i) => (
                            <label htmlFor={item} key={i} className="flex flex-row-reverse gap-1">
                                {item}
                                <input onChange={() => {setChange(true)}} type="checkbox" id={item} name={item} />
                            </label>
                        ))
                    }
                </form>
            </aside>
        </>
    )
}

export default Filter