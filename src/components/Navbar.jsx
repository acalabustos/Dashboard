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
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand >
          <NavLink to="/" className="btn btn-outline-primary">
            <img src={Img} />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} >


            <Nav.Link href="#action1">Fav</Nav.Link>
            <Nav.Link href="#action2">Email</Nav.Link>

            <NavLink to="/CreateProduct" className="btn btn-outline-primary">+ Add Product</NavLink>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FirstNav;