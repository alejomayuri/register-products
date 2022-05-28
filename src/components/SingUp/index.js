import useRegister from "../../hooks/useRegister"

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
        <div className='form-container'>
            <h2>Registrarse</h2>
            <div>
                {error && <p className='error'>{ error }</p>}
            </div>
            <div>
                <form className="main-form" onSubmit={handleRegister}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' onChange={handleEmail} />
                    <label htmlFor="contraseña">Contraseña</label>
                    <input type="password" name='contraseña' onChange={handlePassword} />
                    <label htmlFor="confirmar-contraseña">Confirmar contraseña</label>
                    <input type="password" name='confirmar-contraseña' onChange={handleConfirmPassword} />
                    <input className='submit-btn' type="submit" value='Registrarse' />
                </form>
            </div>
            <div className="inicio-then-message">
                {loading && <p>Registrando...</p>}
            </div>
        </div>
    )
}