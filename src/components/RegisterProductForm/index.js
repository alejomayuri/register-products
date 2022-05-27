export default function RegisterProductForm({ onSubmit, handleOnChange }) {
    return (
        <form className="" onSubmit={onSubmit}>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name='nombre' onChange={handleOnChange} />
            <label htmlFor="description">Descripción</label>
            <input type="text" name='description' onChange={handleOnChange} />
            <input type="submit" value='Registrar producto' />
        </form>
    )
}