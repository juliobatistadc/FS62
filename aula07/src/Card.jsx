function Card({titulo, src, subTitulo, href, textLink}){
    return(
        <>
            <li style={{display: "flex", flexDirection: "column", width: "180px", alignItems: "center", backgroundColor: "white", padding: "10px"}}>
                <h2>{titulo}</h2>
                <img src={src} alt="" />
                <span style={{textAlign: "center", wdith: "150px"}}>{subTitulo}</span>
                <a href={href}>{textLink}</a>
            </li>
        </>
    )
}

export default Card