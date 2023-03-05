import { useLoaderData } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";


function ProductInfo() {

    const { product } = useLoaderData();

    return (
<>
        <Card key={product.id} className="my-3">
          {/* <Card.Img variant="top" src={product.image} /> */}
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{product.category}</Card.Text>
            <Card.Text>{product.brand}</Card.Text>
            <Card.Text>{product.price}</Card.Text>
            {/* <Card.Link to={`/productInfo/${product.id}`} className="btn btn-outline-primary">
              More Idbdhenfo
            </Card.Link> */} 
            <Button variant="outline-secondary" className="mx-2">Favorite</Button>
          </Card.Body>
        </Card>
        
      </>
  );

    
    /*     <div className="productCard">
            <div className="productCard--info">
                <h1>name: {name}</h1>
                <p>description:{description}</p>
                <p>price:{price}€</p>
            </div>
        </div>  */
    
    
}

export default ProductInfo