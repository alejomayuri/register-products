import { LabelForm } from "./style"

export default function Label ({htmlFor, text}) {
    return(
        <LabelForm htmlFor={htmlFor}>{text}</LabelForm>
    )
}