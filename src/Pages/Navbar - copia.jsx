import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import Home from './Home';
// import Contact from './Contact';
// import About from './About';

// import Home from '';
// import Contact from '';
// import About from '';

function FirstNavbar() {
        return (
            <>
                <Navbar bg="dark" variant={"dark"} expand="lg">
                    <Container>
                        <Navbar.Brand href="#">Navbar Demo Arjun Codes</Navbar.Brand>
                            <Nav className="me-auto" navbarScroll>
                                {/* <Nav.Link as={Home} to="/home">Home</Nav.Link>
                                <Nav.Link as={Contact} to="/about">About</Nav.Link>
                                <Nav.Link as={About} to="/contact">Contact</Nav.Link> */}
                                <Nav.Link>Home</Nav.Link>
                                <Nav.Link>About</Nav.Link>
                                <Nav.Link>Contact</Nav.Link>
                            </Nav>
                    </Container>
                </Navbar>
            </>
        )
}

export default FirstNavbar;
