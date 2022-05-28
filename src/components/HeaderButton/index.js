import { HeaderButonStyled } from "./style"

export default function HeaderButton ({ onClick, text }) {
    return(
        <HeaderButonStyled onClick={onClick}>{text}</HeaderButonStyled>
    )
}