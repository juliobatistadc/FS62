import Input from "./Input"

function ListInput() {
    const props = [
        {
            htmlFor: "nome",
            label: "Nome",
            type: "text",
            id: "nome",
            name: "nome"
        },
        {
            htmlFor: "email",
            label: "E-mail",
            type: "text",
            id: "email",
            name: "email"
        },
        {
            htmlFor: "telefone",
            label: "Telefone",
            type: "text",
            id: "telefone",
            name: "telefone",
            readOnly: true,
            chocolate: 123
        }
    ]

    const items = []

    for(let i = 0; i < props.length; i++){
        items.push(<Input {...props[i]} />)
    }

    return (
        <>
            {items}
        </>
    )
}

export default ListInput