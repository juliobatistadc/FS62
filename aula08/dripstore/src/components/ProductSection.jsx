import Card from "./Card.jsx"
import img from '../assets/tenis.svg'

function ProductSection(){
    const listaCards= []
    for(let i = 0; i < 8; i++){
        listaCards.push(<Card key={i} desconto={0.15} src={img} alt="tenis" tipo="Tênis" produto="K-Swiss V8" genero="Masculino" preco={100} />)
    }

    return (
        <>
            {listaCards}
        </>
    )
}

export default ProductSection