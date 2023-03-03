import { useLoaderData } from "react-router-dom";
import Product from '../components/Product';


function CardProduct() {
  const { product } = useLoaderData();
  let {name, description, category, brand, condition, price}= product;

  return (
    <Product/>
  );
}

export default CardProduct;