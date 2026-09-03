function Card({img, nome, especie}){
    return (
        <>
            <div className="border border-blue-300 w-52 p-2">
                <img src={img} alt={nome} />
                <h3>{nome}</h3>
                <span>{especie}</span>
            </div>
        </>
    )
}

export default Card