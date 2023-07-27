import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const CustomNavBar = () => {
    return (
        <Navbar className="bg-body-secondary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={"./imagenNavrs/PostImagen.png"}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Sistemas de Pots
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
}

export { CustomNavBar };