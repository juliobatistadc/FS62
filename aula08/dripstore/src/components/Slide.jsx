import { useEffect, useRef, useState } from "react"

function Slide() {
    const container = useRef(null)
    const [containerLargura, setContainerLargura] = useState(0)
    const [transitionTime, setTransitionTime] = useState(0)
    const [indiceAtivo, setIndiceAtivo] = useState(1)

    const lista = [1, 2, 3]
    const elementos = []
    const ultimoElemento = [...lista].pop()
    const primeiroElemento = [...lista].shift()
    lista.push(primeiroElemento)
    lista.unshift(ultimoElemento)

    for (let i = 0; i < lista.length; i++) {
        elementos.push(<div key={i} id={i} className="teste min-w-50 h-50 bg-red-700 border flex justify-center items-center text-[36px]">{lista[i]}</div>)
    }

    useEffect(()=>{
        setContainerLargura(container.current.offsetWidth)

        const listaElementos = container.current.querySelectorAll(".teste")

    }, [container])

    const moveSlide = (sentido) => {
        if(sentido === "esquerda"){
            setIndiceAtivo(prev => prev - 1)
        }

        if(sentido === "direita"){
            setIndiceAtivo(prev => prev + 1)
        }
    }

    console.log(indiceAtivo)

    return (
        <>
            <div ref={container} className="overflow-hidden w-50 h-50 relative">
                <div className={`flex absolute`} style={{ left: `-${0}px`, transitionDuration: `${transitionTime}s` }}>
                    {elementos}
                </div>
                <div className="w-5 h-50 bg-[#0000ff50] absolute left-0" onClick={()=> moveSlide("esquerda")}></div>
                <div className="w-5 h-50 bg-[#0000ff50] absolute right-0" onClick={()=> moveSlide("direita")}></div>
            </div>
        </>
    )
}

export default Slide