import { useState } from 'react'
import useFormData from '../../hooks/useFormData'
import useRegisterProduct from '../../hooks/useRegisterProduct'
import ModalTitle from '../ModalTitle'
import AuthForm from '../AuthForm'
import Label from '../Label'
import Input from '../Input'
import FormTextarea from '../FormTextarea'
import PreviousImage from '../PreviousImage'
import FormButton from '../FormButton'
import LoadingText from '../LoadingText'

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
                    ? <div>
                        <ModalTitle text='Registrar producto' />
                        <AuthForm onSubmit={handleSubmit}>
                            <Label htmlFor='name' text='Nombre' />
                            <Input type='text' name='name' onChange={handleOnChange} />
                            <Label htmlFor='description' text='Descripción' />
                            <FormTextarea type='text' name='description' onChange={handleOnChange} />
                            <Label htmlFor='price' text='Precio' />
                            <Input type='text' name='price' onChange={handleOnChange} />
                            <Label htmlFor='image' text='Imagen' />
                            <PreviousImage prevImage={prevImage} />
                            {showProgress && <progress value={uploatValue} max="100" />}
                            <Input type="file" name='image' onChange={handleOnChangeImg} />
                            <FormButton type='submit' value='Registrar producto' disabled={disabledButton} />
                        </AuthForm>
                    </div>
                    : <>
                        {
                            loading
                                ? <LoadingText text='Registrando producto...' />
                                : <LoadingText text='Producto registrado :D' />
                        }
                    </>
            }
        </>
    )
}