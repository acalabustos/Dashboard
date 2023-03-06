import { useLoaderData } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';





function ProductInfo() {

  const { products } = useLoaderData();
  const { id } = useParams();
  console.log("aqui", products);

  return (
<>
     {products.map((product) => (
      <Card key={product.id} className="my-3">
        {/*  <Card.Img variant="top" src={product.image} />  */}
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{product.category}</Card.Text>
          <Card.Text>{product.brand}</Card.Text>
          <Card.Text>{product.price}€</Card.Text>
          <Button variant="primary" href="/productInfo/:id">vfvpefmvpe</Button>
           <Button variant="primary"  to={"/productInfo/:id"}>More Info</Button>  
          <Button variant="outline-secondary" className="mx-2">Favorite</Button>
        </Card.Body>
      </Card>
      ))}
    </>
);

  
  
  
}

export default ProductInfo 

