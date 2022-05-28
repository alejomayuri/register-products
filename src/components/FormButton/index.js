import { FormButtonElement } from "./style"

export default function FormButton ({type, value, disabled}) {
    return(
        <FormButtonElement disabled={disabled} type={type} value={value} />
    )
}