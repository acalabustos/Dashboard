import { useState, useEffect } from "react";

function ProductDetail(props) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://example.com/api/products${props.productId}`);
      const data = await response.json();
      setProduct(data);
    }
    fetchData();
  }, [props.productId]);

  return (
    <>
       <Card style={{ width: '28rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Favorito</Card.Link>
        <Card.Link href="#">Compartir</Card.Link>
      </Card.Body>
    </Card>
    </>
  );
}

export default ProductDetail;