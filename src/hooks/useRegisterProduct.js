import { useCallback, useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"
import { getFirestore, getStorage } from "../service/firebase";
import { useProductsContext } from "../context/ProductContext";

const FORM_STATE = {
    name: '',
    description: '',
    user: '',
    price: '',
    image: ''
}

export default function useRegisterProduct() {
    const { updateProducts, setUpdateProducts } = useProductsContext()

    const { currentUser } = useAuth();

    const [formData, setFormData] = useState(FORM_STATE)
    const [uploatValue, setUploadValue] = useState(0)
    const [prevImage, setPrevImage] = useState('')
    const [showProgress, setShowProgress] = useState(false)
    const [disabledButton, setDisabledButton] = useState(true)
    const [loading, setLoading] = useState(false)
    const [showForm, setShowForm] = useState(true)

    useEffect(() => {
        setFormData({
            ...formData,
            user: currentUser.uid
        })
    }, [currentUser.uid])

    const handleOnChange = (e) => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const handleOnChangeImg = (e) => {
        const file = e.target.files[0]
        setShowProgress(true)
        setPrevImage('')
        const storageRef = getStorage().ref(`productos/${file.name}`)
        const task = storageRef.put(file)

        task.then(res => {
            console.log(res)
            const imgUrl = res.ref.getDownloadURL()
            imgUrl.then(url => {
                setFormData({
                    ...formData,
                    image: url
                })
                setPrevImage(url)
                setUploadValue(100)
                setDisabledButton(false)
            })
        }).catch(err => console.log(err))

        task.on('state_changed', snapshot => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100) - 10
            setUploadValue(progress)
        })
    }

    const handleRegisterProduct = useCallback((e) => {
        e.preventDefault();
        setLoading(true)
        setShowForm(false)
        const db = getFirestore();
        db.collection('productos').add(formData)
            .then((res) => {
                console.log(res)
                setLoading(false)
                setUpdateProducts(!updateProducts)
            })
            .catch(err => console.log(err))
    }, [formData])

    const clearRegister = () => {
        setFormData({
            ...FORM_STATE,
            user: currentUser.uid
        })
        setUploadValue(0)
        setPrevImage('')
        setShowProgress(false)
        setDisabledButton(true)
    }

    return {
        uploatValue,
        prevImage,
        showProgress,
        disabledButton,
        loading,
        showForm,
        setShowForm,
        clearRegister,
        handleOnChange,
        handleOnChangeImg,
        handleRegisterProduct
    };
}