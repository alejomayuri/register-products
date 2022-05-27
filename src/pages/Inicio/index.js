import Login from "../../components/Login";
import SingUp from "../../components/SingUp";
import { useState } from "react";
import './Inicio.css'

export default function Inicio() {
    const [auth, setAuth] = useState(true);
    return (
        <>
            <div className="auth-container">
                {
                    auth
                        ? <div>
                            <Login />
                            <div className="auth-msn">
                                <p>¿No estás registrado?</p>
                                <button onClick={() => setAuth(false)}><strong>Regístrate</strong></button>
                            </div>
                        </div>
                        : <div>
                            <SingUp />
                            <div className="auth-msn">
                                <p>¿Ya tienes una cuenta?</p>
                                <button onClick={() => setAuth(true)}><strong>Inicia sesión</strong></button>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}