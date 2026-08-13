import Card from "./Card.jsx"
import produtos from "./items.js"

function ListCard() {
  const items = []

  for (let i = 0; i < produtos.length; i++) {
    items.push(<Card {...produtos[i]} />)
  }

  return (
    <>
      <ul style={{ backgroundColor: "gray", height: "500px", display: "flex" }}>
          {items}
      </ul>
    </>
  )
}

export default ListCard
