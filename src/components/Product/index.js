import './Product.css'
import Modal from '../Modal'
import { useState } from 'react'
import EditAndDeletForm from '../EditAndDeletForm'

export default function Product({ id, name, description, price, image }) {
    const [showOptions, setShowOptions] = useState(false)

    const handleOptions = () => {
        setShowOptions(!showOptions)
    }

    const [showModal, setShowModal] = useState(false)

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const handleOpenModal = () => setShowModal(true)

    return (
        <>
            <div onMouseEnter={handleOptions} onMouseLeave={handleOptions} className="product">
                {
                    showOptions && <button onClick={handleOpenModal} className='optionBtn'>︙</button>
                }
                <h3>{name}</h3>
                <img src={image} alt={name} />
                <p>{description}</p>
                <p className='product-price'>{`$${price}`}</p>
            </div>
            {showModal && <Modal onClose={handleCloseModal}>
                <EditAndDeletForm
                    id={id}
                    name={name}
                    image={image}
                    description={description}
                    price={price}
                />
            </Modal>}
        </>
    )
}