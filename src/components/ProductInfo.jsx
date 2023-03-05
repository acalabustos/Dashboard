import { useLoaderData } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


function ProductInfo() {

    const { product } = useLoaderData();

    return (
<>
        <Card key={product.id} className="my-3">
          {/* <Card.Img variant="top" src={product.image} /> */}
          <Card.Body>
            {<Card.Title>{product.name}</Card.Title>}
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{product.category}</Card.Text>
            <Card.Text>{product.brand}</Card.Text>
            <Card.Text>{product.price}</Card.Text> 
            <Button variant="outline-secondary" className="mx-2">Favorite</Button>
          </Card.Body>
        </Card>
        
      </>
  );
    
    
}

export default ProductInfo