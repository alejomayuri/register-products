import useLogin from "../../hooks/useLogin";

const Login = () => {
    const {
        error,
        loading,
        handleEmail,
        handlePassword,
        handleLogin
    } = useLogin()

    return (
        <div className='form-container'>
            <h2>Iniciar sesión</h2>
            <div>
                {error && <p className='error'>{ error }</p>}
            </div>
            <div>
                <form className="main-form " onSubmit={handleLogin}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' onChange={handleEmail} />
                    <label htmlFor="contraseña">Contraseña</label>
                    <input type="password" name='contraseña' onChange={handlePassword} />
                    <input className='submit-btn' type="submit" value='Iniciar sesión' />
                </form>
            </div>
            <div className="inicio-then-message">
                {loading && <p>Iniciando sesión...</p>}
            </div>
        </div>
    );
}

export default Login;