import ReactDOM from 'react-dom'
import { MainModal, ModalContainer, ModalButton } from './style'

function Modal({ children, onClose }) {
    return (
        <MainModal>
            <ModalContainer>
                <ModalButton onClick={onClose}>X</ModalButton>
                {children}
            </ModalContainer>
        </MainModal>
    )
}

export default function ModalPortal({ children, onClose }) {
    return ReactDOM.createPortal(
        <Modal onClose={onClose}>
            {children}
        </Modal>,
        document.getElementById('modal-root')
    )
}