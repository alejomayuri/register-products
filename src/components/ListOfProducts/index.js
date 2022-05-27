import useProducts from "../../hooks/useProducts"

export default function ListOfProducts () {
    const { products, loading } = useProducts()
    // traer.get()
    //     .then(({ docs }) => {
    //         console.log(docs)
    //         setProductos(docs.map(doc => ({ id: doc.id, ...doc.data() })))
    //     })
        console.log(products)
    return (
        <>
            <h2>Productos</h2>
            {loading ? <p>Cargando...</p> 
            : products.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <img src={product.image} alt={product.name} />
                </div>
            ))}
        </>
    )
}