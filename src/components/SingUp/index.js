import useRegister from "../../hooks/useRegister"
import FormTitle from "../FormTitle"
import AuthForm from "../AuthForm"
import Label from "../Label"
import Input from "../Input"
import FormButton from "../FormButton"
import LoadingText from "../LoadingText"

export default function SingUp() {

    const {
        error,
        loading,
        handleEmail,
        handlePassword,
        handleConfirmPassword,
        handleRegister
    } = useRegister()

    return (
        <div>
            <FormTitle text={'Registrarse'} />
            <div>
                {error && <p className='error'>{ error }</p>}
            </div>
            <div>
                <AuthForm onSubmit={handleRegister}>
                    <Label htmlFor='email' text='Email' />
                    <Input type='email' name='email' onChange={handleEmail} />
                    <Label htmlFor='contraseña' text='Contraseña' />
                    <Input type='password' name='password' onChange={handlePassword} />
                    <Label htmlFor='confirmar contraseña' text='Confirmar contraseña' />
                    <Input type='password' name='confirmPassword' onChange={handleConfirmPassword} />
                    <FormButton type="submit" value='Registrarse' />
                </AuthForm>
            </div>
            <div className="inicio-then-message">
                {loading && <LoadingText text={'Registrando...'} />}
            </div>
        </div>
    )
}