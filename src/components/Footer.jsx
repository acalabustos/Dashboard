import React from 'react';
import '../Style/Footer.css';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className=" py-3 fixed-bottom ">
      <Container>
        <p className="text-center">&copy; {new Date().getFullYear()} Mi Empresa</p>
      </Container>
    </footer>
  );
}

export default Footer;