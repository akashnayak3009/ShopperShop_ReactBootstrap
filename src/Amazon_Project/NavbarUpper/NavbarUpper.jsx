import React, { useState,useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../NavbarUpper/NavbarUpper.css';
import {Link} from 'react-router-dom';



const NavbarUpper=()=> {
  const [categories, setCategories] = useState([]);

   function LoadCategories(){
    fetch('http://fakestoreapi.com/products/categories')
    .then(response=> response.json())
    .then(data=> {
        data.unshift('All');
        setCategories(data);
    })
    }

    useEffect(()=>{
      LoadCategories();
  },[])
  return (
    <Navbar className="my-navbar" style={{ maxHeight: '60px' }}>
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/home"><b id="brandShop">
  <i >ShopperSHOP</i>
</b></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '50px' }}>
            <Nav.Link href="#action1" id="basic-nav-dropdown" className="my-home">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" id="basic-nav-dropdown">
              About
            </Nav.Link>
            <Nav.Link href="#action2" id="basic-nav-dropdown">
              Contact
            </Nav.Link>
            <NavDropdown title="Language" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">English</NavDropdown.Item>
              <NavDropdown.Item href="#">Spanish</NavDropdown.Item>
              <NavDropdown.Item href="#">French</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Category" id="basic-nav-dropdown">
               {
                categories.map(category=><NavDropdown.Item href="#" key={category} >{category}</NavDropdown.Item>)
               }
             </NavDropdown>
            <NavDropdown title ="SignIN" id="basic-nav-dropdown"> 
              <NavDropdown.Item id="signButton"><Link id="signButton" to ="/login">SignIn</Link></NavDropdown.Item>
            </NavDropdown>

            
            <Form className="d-flex">
              <FormControl type="text" placeholder="Search" className="small-input" sta/>
              <Button variant="outline" className="btn btn-warning btn-lg">
                <span className="bi bi-search"></span>
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarUpper;