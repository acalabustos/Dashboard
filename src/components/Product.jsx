/* import "../Style/ProductList.css";
import { productHandler } from "../handlers/productHandler";
import { Link } from 'react-router-dom';


function Product({ product, deleteProduct }) {
  const textStyle = {
    fontFamily: 'lobster Two',
  }


  const { id, image, name, price } = product;


  return (


    <Card className="my-3" >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        {<Card.Title id="tittleStyle" >{name}</Card.Title>}
        <Card.Text >{price}</Card.Text>
        <Button onClick={() => deleteProduct(id)}>Delete</Button>
        <Card.Link to={`/editProduct/${product.id}`}>
          <Button>Edit</Button>
        </Card.Link>
        <Card.Link to={`/products/${product.id}`}>
          <Button id='ButtonStyle'>More Info</Button>
        </Card.Link>

      </Card.Body>
    </Card>


  )
}

export default Product 

 */