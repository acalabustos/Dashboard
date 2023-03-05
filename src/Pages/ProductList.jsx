import { Link, useLoaderData } from "react-router-dom"
import Product from '../components/Product'
import { Card, Button } from "react-bootstrap";
import ProductInfo from "../components/ProductInfo";
import DescriptionProduct from "../Pages/DescriptionProduct";

function ProductList() {
    const { products } = useLoaderData();
    console.log(products)
    return (
        <>
       {products.map((product) => (
        <Card key={product.id} className="my-3">
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>

            <Button variant="primary" href="/productInfo/:id'"> More info</Button>
            <Button variant="outline-secondary" className="mx-2">Favorite</Button>
          </Card.Body>
        </Card>
        ))}
      </>
    )
}
export default ProductList;