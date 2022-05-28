import Modal from '../Modal'
import { useState } from 'react'
import EditAndDeletForm from '../EditAndDeletForm'
import { ProductElement, ProductButton, ProductTitle, ProductImage, ProductDescription, ProductPrice } from './style'


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
            <ProductElement onMouseEnter={handleOptions} onMouseLeave={handleOptions}>
                {
                    showOptions && <ProductButton onClick={handleOpenModal}>︙</ProductButton>
                }
                <ProductTitle>{name}</ProductTitle>
                <ProductImage src={image} alt={name} />
                <ProductDescription>{description}</ProductDescription>
                <ProductPrice>{`$${price}`}</ProductPrice>
            </ProductElement>
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