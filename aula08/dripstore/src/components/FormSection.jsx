import Input from "./Input.jsx"

function FormSection(props) {
    return (
        <>
            <div>
                <h3 className="text-[14px] font-bold">{props.titulo}</h3>
                <hr />
                <Input htmlfor="cep" type="text" label="Cep" required={true}/>
                <Input htmlfor="complemento" type="text" label="Complemento"/>
            </div>

        </>
    )
}

export default FormSection