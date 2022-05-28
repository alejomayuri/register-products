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
                    ? <div className='form-container'>
                        <h2 className='modal-title'>Editar producto</h2>
                        <form className="main-form modal-form" onSubmit={handleSubmit}>
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
                            <input className='submit-btn modal-submit-button' type="submit" value='Editar producto' />
                        </form>
                        <DeleatProductButton deleteProduct={handleDelete} />
                    </div>
                    : <>
                        {
                            message
                                ?   loading
                                    ? <p className='loading-text'>Editando producto...</p>
                                    : <p className='loading-text'>Producto Editado :D</p>
                                :   loadingDelete
                                    ? <p className='loading-text'>Eliminando producto...</p>
                                    : <p className='loading-text'>Producto eliminado</p>
                        }
                    </>
            }

        </>
    )
}