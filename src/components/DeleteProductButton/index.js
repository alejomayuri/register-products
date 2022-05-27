export default function DeleatProductButton ({deleteProduct}) {
    return (
        <>
            <button onClick={deleteProduct} className='deleteProductBtn'>Eliminar producto</button>
        </>
    )
}