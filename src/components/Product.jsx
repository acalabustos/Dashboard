/*import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'; */
import { Link } from 'react-router-dom';
import { productsHandler } from '../handlers/productsHandler';

function Product({ product, deleteProduct }) {

    const { id, image, name, price } = product;

    return (
       
        <Card className="my-3">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          {<Card.Title>{name}</Card.Title>}
          <Card.Text>{price}</Card.Text>
        {/*   <Card.Link to={`/productInfo/${product.id}`} className="btn btn-outline-primary">
            More Idbdhenfo
          </Card.Link> */}
           <Button onClick={() => deleteProduct(id)}>Delete</Button>
           <Card.Link to={`/editProduct/${product.id}`}>
              <Button>Edit</Button>
          </Card.Link>
          <Card.Link to={`/products/${product.id}`}>
          <Button>More Info</Button>
          </Card.Link>

           {/*<Button variant="primary"  to={"/productInfo/:id"}>More Info</Button> 
          <Button variant="outline-secondary" className="mx-2">Favorite</Button> */}
        </Card.Body>
      </Card>


)
}

export default Product

