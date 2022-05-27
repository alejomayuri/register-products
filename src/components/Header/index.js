import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import Modal from '../Modal'
import './Header.css'
import { getFirestore } from '../../service/firebase'
import RegisterProductForm from '../RegisterProductForm'

export default function Header() {
    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = () => setShowModal(true)

    const handleCloseModal = () => setShowModal(false)

    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            console.log(err)
        }
    }

    const { currentUser, logout } = useAuth();
    const FORM_STATE = {
        nombre: '',
        description: '',
        usuario: ''
    }
    const [formData, setFormData] = useState(FORM_STATE)
    useEffect(() => {
        setFormData({
            ...formData,
            usuario: currentUser.uid
        })
    }, [currentUser.uid])
    const handleOnChange = (e) => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
    const handleRegisterProduct = (e) => {
        e.preventDefault();
        const db = getFirestore();
        db.collection('productos').add(formData)
            .then((res) => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <>
            <header>
                <div className="button-container">
                    <button className='btn' onClick={handleOpenModal}>Registrar producto</button>
                    <button className='btn' onClick={handleLogout}>Cerrar sesión</button>
                </div>
            </header>
            {showModal && <Modal onClose={handleCloseModal}>
                <RegisterProductForm handleOnChange={handleOnChange} onSubmit={handleRegisterProduct} />
            </Modal>}
        </>
    )
}