import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"
import { getStorage } from "../service/firebase"

export default function useFormData({
    name,
    image,
    description,
    price
}={}) {

    const FORM_STATE = {
        user: '',
        name: name,
        description: description,
        price: price,
        image: image
    }
    const { currentUser } = useAuth()

    const [formData, setFormData] = useState(FORM_STATE)
    const [showProgress, setShowProgress] = useState(false)
    const [uploatValue, setUploadValue] = useState(0)
    const [prevImage, setPrevImage] = useState(FORM_STATE.image)
    const [disabledButton, setDisabledButton] = useState(true)

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
    return {
        formData,
        showProgress,
        uploatValue,
        prevImage,
        disabledButton,
        handleOnChange,
        handleOnChangeImg
    }
}