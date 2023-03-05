import React from "react";
import { Container, Row } from "react-bootstrap";
import "../Style/Home.css";
import Accordion from '../components/Accordion';
import Carousel from '../components/Carousel';

function Home() {

    return (
        <div>
            <Container fluid>
                <div className="prueba">
                    <Row>

                    <h1>Buy and sell second-hand goods</h1>
                    
                        <Carousel></Carousel>

                        <Accordion defaultActiveKey="3">
                    
                        </Accordion>

                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Home;
