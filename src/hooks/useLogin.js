import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useLocation } from "wouter";

export default function useLogin() {
    const { login } = useAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)

    const [, navigate] = useLocation()

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true)

        login(email, password)
            .then(() => {
                setLoading(false)
                navigate('/')
            })
            .catch((error) => setError('Error del servidor'));
    };

    return {
        error,
        loading,
        handleLogin,
        handleEmail,
        handlePassword
    };
}