import { useLoaderData } from "react-router-dom";
import Card from 'react-bootstrap/Card';





function ProductInfo() {

    const { product } = useLoaderData();
    let {name, description, price} = product;

    return (

<Card style={{ width: '28rem' }}>
      <Card.Body>
        <Card.Title>name:{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">More information</Card.Link>
        <Card.Link href="#">Compartir</Card.Link>
      </Card.Body>
    </Card>
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