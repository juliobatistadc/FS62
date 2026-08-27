function Input({htmlfor, type, label, required}){
    return(
        <>
            <label className="flex flex-col text-[12px] font-bold" htmlFor={htmlfor}>
                {label}{required && " *"}
                <input className="bg-[#4747471f] rounded" type={type} required={required} />
            </label>
        </>
    )
}

export default Input