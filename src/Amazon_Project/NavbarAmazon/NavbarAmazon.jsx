import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Offcanvas } from 'react-bootstrap';
import { useState} from 'react';

const NavbarAmazon=()=> {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  return (
    <Navbar bg="dark" variant="dark" expand="xxl">
      <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button variant="dark" onClick={() => setShowOffcanvas(!showOffcanvas)}>
              <span className="bi bi-justify"></span>All
            </Button>
            <Nav.Link href="#link">Amazon miniTV</Nav.Link>
            <Nav.Link href="#link">Sell</Nav.Link>
            <Nav.Link href="#link">Best Sellers</Nav.Link>
            <Nav.Link href="#link">Mobile</Nav.Link>
            <Nav.Link href="#link">Today's Deals</Nav.Link>
            <Nav.Link href="#link">Customer Service</Nav.Link>
            <Nav.Link href="#link">Electronics</Nav.Link>
            <Nav.Link href="#link">New Realeases</Nav.Link>
            <NavDropdown title="Prime" id="basic-nav-dropdown">
            
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Home & Kitchen</Nav.Link>
            <Nav.Link href="#link">AmazonPay</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarAmazon;