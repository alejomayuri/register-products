import { InputForm } from "./style"

export default function Input ({type, name, onChange, value, required = true}) {
    return(
        <InputForm required={required} type={type} name={name} onChange={onChange} value={value} />
    )
}