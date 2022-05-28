export default function DeleatProductButton ({deleteProduct}) {
    return (
        <>
            <button onClick={deleteProduct} className='delete-product-button'>Eliminar producto</button>
        </>
    )
}