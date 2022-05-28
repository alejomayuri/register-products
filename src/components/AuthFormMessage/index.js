import { AuthFormMessageContainer, AuthFormMessageText, AuthFormMessageButton } from "./style"

export default function AuthMessage ({text, textButton, onclick}) {
    return (
        <AuthFormMessageContainer>
            <AuthFormMessageText>{text}</AuthFormMessageText>
            <AuthFormMessageButton onClick={onclick}><strong>{textButton}</strong></AuthFormMessageButton>
        </AuthFormMessageContainer>
    )
}