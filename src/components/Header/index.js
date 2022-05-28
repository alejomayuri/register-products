import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import Modal from '../Modal'
import RegisterProductForm from '../RegisterProductForm'
import HeaderButton from '../HeaderButton'

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
                <div className="header-button-container">
                    <HeaderButton onClick={handleOpenModal} text="Registrar producto" />
                    <HeaderButton onClick={handleLogout} text="Cerrar sesión" />
                </div>
            </header>
            {showModal && <Modal onClose={handleCloseModal}>
                <RegisterProductForm />
            </Modal>}
        </>
    )
}