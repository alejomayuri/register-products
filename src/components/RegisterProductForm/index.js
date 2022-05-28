import { useState } from 'react'
import useFormData from '../../hooks/useFormData'
import useRegisterProduct from '../../hooks/useRegisterProduct'

export default function RegisterProductForm() {

    const {
        formData,
        showProgress,
        uploatValue,
        prevImage,
        disabledButton,
        handleOnChange,
        handleOnChangeImg
    } = useFormData()

    const { loading, handleRegisterProduct } = useRegisterProduct({formData})

    const [showForm, setShowForm] = useState(true)

    const handleSubmit = (e) => {
        handleRegisterProduct(e)
        setShowForm(false)
    }

    return (
        <>
            {
                showForm
                    ? <div className='form-container'>
                        <h2 className='modal-title'>Registrar producto</h2>
                        <form className="main-form modal-form" onSubmit={handleSubmit}>
                            <label htmlFor="name">Nombre</label>
                            <input required type="text" name='name' onChange={handleOnChange} />
                            <label htmlFor="description">Descripción</label>
                            <textarea required type="text" name='description' onChange={handleOnChange} />
                            <label htmlFor="price">Precio</label>
                            <input required type="text" name='price' onChange={handleOnChange} />
                            <label htmlFor="foto">Foto</label>
                            <img className="prevImg" src={prevImage} alt="" />
                            {showProgress && <progress value={uploatValue} max="100" />}
                            <input required type="file" name='foto' onChange={handleOnChangeImg} />
                            <input className='submit-btn modal-submit-button' disabled={disabledButton ? true : false} type="submit" value='Registrar producto' />
                        </form>
                    </div>
                    : <>
                        {
                            loading
                                ? <p className='loading-text'>Registrando producto...</p>
                                : <p className='loading-text'>Producto registrado :D</p>
                        }
                    </>
            }
        </>
    )
}