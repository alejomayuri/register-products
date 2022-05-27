import './RegisterProductForm.css'

export default function RegisterProductForm({
    disabledButton,
    showProgress,
    prevImage,
    uploatValue,
    handleOnChange,
    handleOnChangeImg,
    onSubmit
}) {

    return (
        <>
            <h2 className='registrar-titulo'>Registrar producto</h2>
            <form className="registerProduct-form" onSubmit={onSubmit}>
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
                <input className='submitProductBtn' disabled={disabledButton ? true : false} type="submit" value='Registrar producto' />
            </form>
        </>
    )
}