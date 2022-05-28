import { useState } from 'react'
import useFormData from '../../hooks/useFormData'
import useEdit from '../../hooks/useEdit'
import useDelete from '../../hooks/useDelete'
import DeleatProductButton from '../DeleteProductButton'
import ModalTitle from '../ModalTitle'
import AuthForm from '../AuthForm'
import Label from '../Label'
import Input from '../Input'
import FormTextarea from '../FormTextarea'
import PreviousImage from '../PreviousImage'
import FormButton from '../FormButton'
import LoadingText from '../LoadingText'

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
                    ? <div>
                        <ModalTitle text='Editar producto' />
                        <AuthForm onSubmit={handleSubmit}>
                            <Label htmlFor='name' text='Nombre' />
                            <Input type='text' name='name' onChange={handleOnChange} value={formData.name} />
                            <Label htmlFor='description' text='Descripción' />
                            <FormTextarea type='text' name='description' onChange={handleOnChange} value={formData.description} />
                            <Label htmlFor='price' text='Precio' />
                            <Input type='text' name='price' onChange={handleOnChange} value={formData.price} />
                            <Label htmlFor='image' text='Imagen' />
                            <PreviousImage prevImage={prevImage} />
                            {showProgress && <progress value={uploatValue} max="100" />}
                            <Input required={false} type="file" name='image' onChange={handleOnChangeImg} />
                            <FormButton type='submit' value='Editar producto' />
                        </AuthForm>
                        <DeleatProductButton deleteProduct={handleDelete} text={'Eliminar producto'} />
                    </div>
                    : <>
                        {
                            message
                                ?   loading
                                    ? <LoadingText text='Editando producto..' />
                                    : <LoadingText text='Producto Editado :D' />
                                :   loadingDelete
                                    ? <LoadingText text='Eliminando producto...' />
                                    : <LoadingText text='Producto eliminado' />
                        }
                    </>
            }

        </>
    )
}