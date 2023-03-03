import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Product({ product }) {

    const { previewImage, name, description, category, brand, condition, price } = product;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={previewImage} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{category}</ListGroup.Item>
        <ListGroup.Item>{brand}</ListGroup.Item>
        <ListGroup.Item>{condition}</ListGroup.Item>
        <ListGroup.Item>{price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Card.Link to="/CreateProduct/id" className="btn btn-outline-primary">Edgeetgegit</Card.Link>
      <Card.Link to="/CreateProduct/id" className="btn btn-outline-primary">Delete</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Product;