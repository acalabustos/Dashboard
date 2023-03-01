import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light py-3">
      <Container>
        <p className="text-center">&copy; {new Date().getFullYear()} Mi Empresa</p>
      </Container>
    </footer>
  );
}

export default Footer;