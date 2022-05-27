import './EditAndDeleteForm.css'
import { useState } from 'react'
import useFormData from '../../hooks/useFormData'
import useEdit from '../../hooks/useEdit'
import useDelete from '../../hooks/useDelete'
import DeleatProductButton from '../DeleteProductButton'

export default function EditAndDeletForm({
    id,
    name,
    image,
    description,
    price
}) {

    const {
        formData,
        showProgress,
        uploatValue,
        prevImage,
        handleOnChange,
        handleOnChangeImg
    } = useFormData({
        name,
        image,
        description,
        price
    })

    const { loading, handleEditProduct } = useEdit({ id: id, formData: formData })

    const { loadingDelete, deleteProduct } = useDelete({ id: id })

    const [showForm, setShowForm] = useState(true)
    const [message, setMessage] = useState(true)

    const handleSubmit = (e) => {
        handleEditProduct(e)
        setShowForm(false)
    }

    const handleDelete = () => {
        deleteProduct()
        setShowForm(false)
        setMessage(false)
    }

    return (
        <>
            {
                showForm
                    ? <>
                        <h2 className='registrar-titulo'>Editar producto</h2>
                        <form className="registerProduct-form" onSubmit={handleSubmit}>
                            <label htmlFor="name">Nombre</label>
                            <input required type="text" name='name' value={formData.name} onChange={handleOnChange} />
                            <label htmlFor="description">Descripción</label>
                            <textarea required type="text" name='description' value={formData.description} onChange={handleOnChange} />
                            <label htmlFor="price">Precio</label>
                            <input required type="text" name='price' value={formData.price} onChange={handleOnChange} />
                            <label htmlFor="foto">Foto</label>
                            <img className="prevImg" src={prevImage} alt="" />
                            {showProgress && <progress value={uploatValue} max="100" />}
                            <input type="file" name='foto' onChange={handleOnChangeImg} />
                            <input className='submitProductBtn' type="submit" value='Editar producto' />
                        </form>
                        <DeleatProductButton deleteProduct={handleDelete} />
                    </>
                    : <>
                        {
                            message
                                ?   loading
                                    ? <p>Actualizando producto...</p>
                                    : <p>Producto actualizado</p>
                                :   loadingDelete
                                    ? <p>Eliminando producto...</p>
                                    : <p>Producto eliminado</p>
                        }
                    </>
            }

        </>
    )
}