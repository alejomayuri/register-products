import './EditAndDeleteForm.css'
import { useState } from 'react'
import useFormData from '../../hooks/useFormData'
import useEdit from '../../hooks/useEdit'

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

    const [showForm, setShowForm] = useState(true)

    const { loading, handleEditProduct } = useEdit({ id: id, formData: formData })

    const handleSubmit = (e) => {
        handleEditProduct(e)
        setShowForm(false)
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
                    </>
                    : <>
                        {
                            loading
                            ? <p>Actualizando producto...</p>
                            : <p>Producto actualizado</p>
                        }
                    </>
            }

        </>
    )
}