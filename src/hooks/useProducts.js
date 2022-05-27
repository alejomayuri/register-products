import { useEffect, useState } from "react"
import { getFirestore } from "../service/firebase";
import { useProductsContext } from "../context/ProductContext";

export default function useProducts() {

    const { products, updateProducts, setProducts } = useProductsContext()

    const [loading, setLoading] = useState(true)

    const dbQuery = getFirestore()
    const traer = dbQuery.collection('productos')
    
    useEffect(() => {
        traer.get().then(({ docs }) => {
            setLoading(false)
            setProducts(docs.map(doc => ({ id: doc.id, ...doc.data() })))
        })
    }, [updateProducts])

    return {
        products,
        loading
    };
}