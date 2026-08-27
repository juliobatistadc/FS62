//desconto=20%
//0.2

function Card({desconto, src, alt, tipo, produto, genero, preco}){
    return (
        <>
            <div className="flex flex-col w-48 bg-amber-400">
                {desconto && (
                    <span className="tag">{desconto * 100}% OFF</span>
                )}
                <img src={src} alt={alt} />
                <span className="tipo">{tipo}</span>
                <span className="produto-genero">
                    {produto} - {genero}
                </span>
                <span className="preco">{preco}</span>
                {desconto && (
                    <span className="preco-desconto">{preco - preco * desconto}</span>
                )}
            </div>
        </>
    )
}

export default Card