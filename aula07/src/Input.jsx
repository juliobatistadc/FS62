function Input({htmlFor, ifor, label, ...rest}){
    return(
        <>
            <label htmlFor={htmlFor}>
                {label}
                <input {...rest}/>
            </label>
        </>
    )
}

export default Input