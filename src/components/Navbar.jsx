
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Img from '../Img/logo proyecto.png';
import "../Style/Navbar.css";
import { FaRegHeart } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


function FirstNav() {

  return (
    <Navbar style={{ backgroundColor: '#24B399' }} expand="lg">

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
          
          <div className='StyleIcons'>
            <IconContext.Provider value={{ color: '#f2cc49', size: '2em' }}>
              <FaRegHeart/>    
            </IconContext.Provider>
          </div>

          <div>
            <IconContext.Provider value={{ color: '#f2cc49', size: '2em' }}>
             <FiMail />
            </IconContext.Provider>
          </div>

          <Nav.Link className='Links' href="/DescriptionProduct">Description</Nav.Link>      
                    
        </Navbar.Collapse>

            
           
        <NavLink to="/CreateProduct" className="btn btn-outline-primary" style={{background: '#F2CC49', border: '2px solid #2D1C28', color: 'Black'}}>+ Add Product</NavLink>

      </Container>
    </Navbar>
  );
}

export default FirstNav;