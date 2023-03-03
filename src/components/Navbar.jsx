import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Img from '../Img/logo proyecto.png';
import "../Style/Navbar.css";
import { NavLink } from 'react-router-dom'



function FirstNav() {
  return (
    <Navbar style={{ backgroundColor: '#24B399' }} bg="light" expand="lg">

      <Container fluid>
        <Navbar.Brand  href='/'><img src={Img} /></Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Form className="d-flex">

            <Form.Control
              type="search"
              placeholder="Search Categories"
              className="me-2"
              aria-label="Search" />
            <Button variant="outline-success">Search</Button>           
          </Form>    
          
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >         
          </Nav>

          <Nav.Link href="#action1">
           
          </Nav.Link>

          <Nav.Link href="/DescriptionProduct">Description</Nav.Link>      
                    
        </Navbar.Collapse>

            
           
        <NavLink to="/CreateProduct" className="btn btn-outline-primary">+ Add Product</NavLink>

      </Container>
    </Navbar>
  );
}

export default FirstNav;