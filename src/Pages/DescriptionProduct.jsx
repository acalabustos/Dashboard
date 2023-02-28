import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function DescriptionProduct() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={6}>
            <h1>Esto tambien es una prueba</h1>
            <p>Este es el texto principal de la página de inicio.</p>
          </Col>
          <Col md={6}>
            <img
              src="https://via.placeholder.com/400x300"
              alt="Imagen de ejemplo"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DescriptionProduct;