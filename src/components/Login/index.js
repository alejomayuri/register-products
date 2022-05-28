import useLogin from "../../hooks/useLogin";
import FormTitle from "../FormTitle";
import AuthForm from "../AuthForm";
import Label from "../Label";
import Input from "../Input";
import FormButton from "../FormButton";
import LoadingText from "../LoadingText";

const Login = () => {
    const {
        error,
        loading,
        handleEmail,
        handlePassword,
        handleLogin
    } = useLogin()

    return (
        <div>
            <FormTitle text={'Iniciar sesión'} />
            <div>
                {error && <p className='error'>{ error }</p>}
            </div>
            <div>
                <AuthForm onSubmit={handleLogin}>
                    <Label htmlFor='email' text='Email' />
                    <Input type='email' name='email' onChange={handleEmail} />
                    <Label htmlFor='contraseña' text='Contraseña' />
                    <Input type='password' name='password' onChange={handlePassword} />
                    <FormButton type="submit" value='Iniciar sesión' />
                </AuthForm>
            </div>
            <div className="inicio-then-message">
                {loading && <LoadingText text={'Iniciando sesión...'} />}
            </div>
        </div>
    );
}

export default Login;