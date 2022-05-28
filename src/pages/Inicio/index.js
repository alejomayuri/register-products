import Login from "../../components/Login";
import SingUp from "../../components/SingUp";
import { useState } from "react";
import { InicioMain, InicioContainer, InicioFormContainer } from "./style";
import AuthMessage from "../../components/AuthFormMessage";

export default function Inicio() {
    const [auth, setAuth] = useState(true);
    const handleChange = () => {
        setAuth(!auth);
    }
    return (
        <>
            <InicioMain>
                <InicioContainer>
                    <InicioFormContainer>
                        {
                            auth
                                ? <div>
                                    <Login />
                                    <AuthMessage onclick={handleChange} text='¿No estás registrado?' textButton='Regístrate' />
                                </div>
                                : <div>
                                    <SingUp />
                                    <AuthMessage onclick={handleChange} text='¿Ya tienes una cuenta?' textButton='Inicia sesión' />
                                </div>
                        }
                    </InicioFormContainer>
                </InicioContainer>
            </InicioMain>
        </>
    )
}