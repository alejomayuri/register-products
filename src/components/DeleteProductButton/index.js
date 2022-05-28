import { DeleteProductButtonStyled } from "./style"
export default function DeleatProductButton ({deleteProduct, text}) {
    return (
        <>
            <DeleteProductButtonStyled onClick={deleteProduct} className='delete-product-button'>{text}</DeleteProductButtonStyled>
        </>
    )
}