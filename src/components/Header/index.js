import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import Modal from '../Modal'
import './Header.css'
import RegisterProductForm from '../RegisterProductForm'
import useRegisterProduct from '../../hooks/useRegisterProduct'

export default function Header() {
    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = () => setShowModal(true)

    const { logout } = useAuth();

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            console.log(err)
        }
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
                <RegisterProductForm />
            </Modal>}
        </>
    )
}