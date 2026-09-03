import { useEffect, useState } from "react"
import Card from "./Card.jsx"

function CardList() {
    const [info, setInfo] = useState({})

    useEffect(() => {
        async function dtFetch() {
            const fetchData = await fetch("https://rickandmortyapi.com/api/character")
            const data = await fetchData.json()

            setInfo(data)
        }

        dtFetch()
    }, [])

    const items = []

    for (let i = 0; i < info?.results?.length; i++) {
        const item = info.results[i]
        items.push(<Card key={item.id} img={item.image} nome={item.name} especie={item.species} />)
    }

    return (
        <>
            {/* {items} */}

            {info?.results?.map(item => <Card key={item.id} img={item.image} nome={item.name} especie={item.species}/>)}
        </>
    )
}

export default CardList