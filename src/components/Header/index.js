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

    const {
        uploatValue,
        prevImage,
        showProgress,
        disabledButton,
        loading,
        showForm,
        setShowForm,
        clearRegister,
        handleOnChange,
        handleOnChangeImg,
        handleRegisterProduct
    } = useRegisterProduct()

    const handleCloseModal = () => {
        setShowModal(false)
        setShowForm(true)
        clearRegister()
    }

    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            console.log(err)
        }
    }

    const handleAnotherRegister = () => {
        setShowForm(true)
        clearRegister()
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
                {showForm
                    ? <RegisterProductForm
                        disabledButton={disabledButton}
                        showProgress={showProgress}
                        prevImage={prevImage}
                        uploatValue={uploatValue}
                        handleOnChange={handleOnChange}
                        handleOnChangeImg={handleOnChangeImg}
                        onSubmit={handleRegisterProduct}
                    />
                    : <div className="loading">
                        {loading
                            ? <p>Registrando...</p>
                            : <>
                                <p>Registro exitoso</p>
                                <button onClick={handleAnotherRegister}>Registrar otro producto</button>
                            </>
                        }
                    </div>
                }

            </Modal>}
        </>
    )
}