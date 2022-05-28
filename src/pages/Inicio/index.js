import Login from "../../components/Login";
import SingUp from "../../components/SingUp";
import { useState } from "react";

export default function Inicio() {
    const [auth, setAuth] = useState(true);
    return (
        <>
            <div className="inicio">
                <div className="incio-container">
                    <div className="main-form-container main-form-container-inicio">
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
                </div>
            </div>
        </>
    )
}