import React from "react";
import { Container } from "react-bootstrap";
import Form from "../components/Form";
import ButtonProduct from "../components/ButtonProduct";


function CreateProduct() {
  function handleClick(){
    console.log('El botón ha sido presionado')  
  }
  return (
    <div>
      <ButtonProduct className="primary" onClick={handleClick}>
        Haz clic aquí
      </ButtonProduct>
      
      <Container fluid>
       <Form></Form>
      </Container>
    </div>
  );
}

export default CreateProduct;