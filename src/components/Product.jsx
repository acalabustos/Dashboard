/*import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'; */
import { Link } from 'react-router-dom';

function Product({ product }) {

    const { name, description, category, brand, condition, price } = product;

    return (
        <div className="productCard">
            <div className="productCard--info">
                <h1>{name}</h1>
                <h1>{description}</h1>
                <h1>{category}</h1>
                <h1>{brand}</h1>
                <h1>{condition}</h1>
                <p>price: {price}$</p>
            </div>
            <div className="productCard--buttons">
                <button>Delete</button>
                <Link className="edit--link" to={`/editProduct/${product.id}`}>
                <button>Edit</button>
                </Link>
            </div>
        </div>
    )
}

export default Product
