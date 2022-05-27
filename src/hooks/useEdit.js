import { useState } from "react"
import { getFirestore } from "../service/firebase"
import { useProductsContext } from "../context/ProductContext"

export default function useEdit({
    id,
    formData
} = {}) {

    const { updateProducts, setUpdateProducts } = useProductsContext()

    const [loading, setLoading] = useState(false)

    const handleEditProduct = (e) => {
        e.preventDefault()
        setLoading(true)

        const db = getFirestore()
        db.collection('productos').doc(id).update({
            ...formData
        })
            .then(() => {
                setLoading(false)
                console.log("Document successfully updated!");
                setUpdateProducts(!updateProducts)
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    }

    return {
        loading,
        handleEditProduct
    }
}