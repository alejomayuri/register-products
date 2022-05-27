import useRegister from "../../hooks/useRegister"
import './SingUp.css'

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
        <div className='singup-container'>
            <h2>Registrarse</h2>
            <div>
                {error && <p className='error'>{ error }</p>}
            </div>
            <div>
                <form className="singup-form" onSubmit={handleRegister}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' onChange={handleEmail} />
                    <label htmlFor="contraseña">Contraseña</label>
                    <input type="password" name='contraseña' onChange={handlePassword} />
                    <label htmlFor="confirmar-contraseña">Confirmar contraseña</label>
                    <input type="password" name='confirmar-contraseña' onChange={handleConfirmPassword} />
                    <input className='singup-btn' type="submit" value='Registrarse' />
                </form>
            </div>
            <div>
                {loading && <p>Cargando...</p>}
            </div>
        </div>
    )
}