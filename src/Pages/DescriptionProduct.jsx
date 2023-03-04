import { useState, useEffect } from "react";

function ProductDetail(props) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://example.com/api/products/${props.productId}`);
      const data = await response.json();
      setProduct(data);
    }
    fetchData();
  }, [props.productId]);

  return (
    <>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <img src={product.imageUrl} alt={product.name} />
          <p>{product.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ProductDetail;