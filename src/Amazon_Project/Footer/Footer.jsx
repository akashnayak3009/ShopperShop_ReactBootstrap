import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Footer/Footer.css';
const Footer = () => {
  return (
    <footer className="bg-dark text-light amazonFoot">
      <Container fluid>
        <Row className="py-5">
          <Col xs={12} md={4}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li>Blog</li>
              <li>FAQs</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5>Connect With Us</h5>
            <ul className="list-unstyled">
              <li>Email: example@example.com</li>
              <li>Phone: 123-456-7890</li>
              <li>Address: 123 Main St, City, State, ZIP</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <hr className="bg-light" />
              <p className="text-center my-3">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
