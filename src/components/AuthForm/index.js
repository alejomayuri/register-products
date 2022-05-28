import { AuthFormElement } from "./style"

export default function AuthForm ({children, onSubmit}) {
    return (
        <AuthFormElement onSubmit={onSubmit}>{children}</AuthFormElement>
    )
}