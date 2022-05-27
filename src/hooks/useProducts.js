import { useEffect, useState } from "react"
import { getFirestore } from "../service/firebase";
import { useProductsContext } from "../context/ProductContext";
import { useAuth } from "../context/AuthContext";

export default function useProducts() {

    const { products, updateProducts, setProducts } = useProductsContext()

    const { currentUser } = useAuth()

    const [loading, setLoading] = useState(true)

    const dbQuery = getFirestore()
    const traer = dbQuery.collection('productos')

    useEffect(() => {
        if (currentUser) {
            traer.get().then(({ docs }) => {
                setLoading(false)
                setProducts(
                    docs.filter(doc => doc.data().user === currentUser.uid).map(doc => ({ id: doc.id, ...doc.data() })))
            })
        }
    }, [currentUser, updateProducts, setProducts])

    return {
        products,
        loading
    };
}