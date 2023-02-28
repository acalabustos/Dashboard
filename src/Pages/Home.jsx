import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Style/Home.css";
import Accordion from '../components/Accordion';
import Carousel from '../components/Carousel';
function Home() {
    return (
        <div>
            <Container fluid>
                <div className="prueba">
                    <Row>

                        <h1>Bienvenido a mi sitio web</h1>
                        <p>Este es el texto principal de la página de inicio.</p>
                        <Carousel></Carousel>

                        <Accordion defaultActiveKey="0">
                    
                        </Accordion>

                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Home;