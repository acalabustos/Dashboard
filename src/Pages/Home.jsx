import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Style/Home.css";

function Home() {
  return (
    <div>
      <Container fluid>
       <div className="prueba">
        <Row>
          <Col md={6}>
            <h1>Bienvenido a mi sitio web</h1>
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
        </div>
      </Container>
    </div>
  );
}

export default Home;