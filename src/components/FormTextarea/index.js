import { FormTextareaStyled } from "./style";

export default function FormTextarea ({type, name, onChange, value}) {
    return (
        <FormTextareaStyled required type={type} name={name} onChange={onChange} value={value} />
    )
}