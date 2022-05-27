import { useCallback, useState } from "react"
import { getFirestore } from "../service/firebase";
import { useProductsContext } from "../context/ProductContext";

export default function useRegisterProduct({ formData } = {}) {
    const { updateProducts, setUpdateProducts } = useProductsContext()

    const [loading, setLoading] = useState(false)

    const handleRegisterProduct = useCallback((e) => {
        e.preventDefault();
        setLoading(true)
        const db = getFirestore();
        db.collection('productos').add(formData)
            .then((res) => {
                console.log(res)
                setLoading(false)
                setUpdateProducts(!updateProducts)
            })
            .catch(err => console.log(err))
    }, [formData])

    return {
        loading,
        handleRegisterProduct
    };
}