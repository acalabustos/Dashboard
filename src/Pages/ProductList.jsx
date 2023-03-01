import { Link, useLoaderData } from "react-router-dom"
import Product from '../components/Product'


function ProductList() {
    const { products } = useLoaderData();

    return (
        <>
        {products.map((product) => (
          <Link key={product.id} to={`products/${product.id}`} name={product.name} className="product--link">
            <Product product={product} />
          </Link>
        ))}
      </>
    )
}

export default ProductList;