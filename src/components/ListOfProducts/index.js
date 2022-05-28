import useProducts from "../../hooks/useProducts"
import Product from "../Product"

export default function ListOfProducts() {
    const { products, loading } = useProducts()

    console.log(products.length)
    return (
        <>
            <h1>Productos</h1>
            {
                products.length === 0 && !loading && <h2>No tienes productos registrados</h2>
            }
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