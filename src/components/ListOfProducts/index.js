import useProducts from "../../hooks/useProducts"
import Product from "../Product"
import './ListOfProducts.css'

export default function ListOfProducts() {
    const { products, loading } = useProducts()
    return (
        <>
            <h2>Productos</h2>
            <div className="productContainer">
                {loading ? <p>Cargando productos...</p>
                    : products.map(product => (
                        <Product
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            image={product.image}
                            description={product.description}
                            price={product.price}
                        />
                    ))}
            </div>
        </>
    )
}