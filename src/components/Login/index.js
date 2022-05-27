import useLogin from "../../hooks/useLogin";
import './Login.css'

const Login = () => {
    const {
        error,
        loading,
        handleEmail,
        handlePassword,
        handleLogin
    } = useLogin()

    return (
        <div className='login-container'>
            <h2>Iniciar sesión</h2>
            <div>
                {error && <p className='error'>{ error }</p>}
            </div>
            <div>
                <form className="login-form" onSubmit={handleLogin}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' onChange={handleEmail} />
                    <label htmlFor="contraseña">Contraseña</label>
                    <input type="password" name='contraseña' onChange={handlePassword} />
                    <input className='btn' type="submit" value='Iniciar sesión' />
                </form>
            </div>
            <div>
                {loading && <p>Cargando...</p>}
            </div>
        </div>
    );
}

export default Login;