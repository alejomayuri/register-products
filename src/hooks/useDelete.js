import { useState } from "react";
import { getFirestore } from "../service/firebase";
import { useProductsContext } from "../context/ProductContext";

export default function useDelete({ id } = {}) {

    const { updateProducts, setUpdateProducts } = useProductsContext()

    const [loadingDelete, setLoadingDelete] = useState(false);

    const deleteProduct = () => {
        setLoadingDelete(true);
        const db = getFirestore()
        db.collection('productos').doc(id).delete()
            .then(() => {
                setLoadingDelete(false);
                console.log("Document successfully deleted!");
                setUpdateProducts(!updateProducts)
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
    }

    return {
        loadingDelete,
        deleteProduct
    }
}