import { createContext, useState, useContext } from "react";

const ProductContext = createContext();

export const useProductsContext = () => useContext(ProductContext)

export const ProductsProvider = (props) => {

    const [products, setProducts] = useState([])
    const [updateProducts, setUpdateProducts] = useState(false)

    const value = {products, setProducts, updateProducts, setUpdateProducts}

    return (
        <ProductContext.Provider value={value}>
            {props.children}
        </ProductContext.Provider>
    )
}
