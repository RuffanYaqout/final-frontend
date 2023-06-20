import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//importing from bootstrap
import  {Button , Container,Navbar, Nav, Form, FormControl ,InputGroup} from 'react-bootstrap';
//importing logo
import logo from '../images/logo.png';
//importing icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone , faSearch, faMicrophone} from '@fortawesome/free-solid-svg-icons';


function Navi() {

  return (
  <div>
      {/*Above Nav Bar */}
      <section id="aboveNav" className="text-center mb-0 custom-alert d-flex justify-content-between">
        <div>
          <FontAwesomeIcon icon={faPhone}className="mr-2"/>
          <span className="hotline-text">1623</span>
        </div>
        <div> 
          <a  id="register"href="./register">Sign In</a>
        </div>
      </section>

   <Navbar expand="lg" className="navBar">
     <Container>
       <Navbar.Brand>

       <a href="http://localhost:3000/">
  <img alt="logo"  src={logo} width="200" height="90" className="d-inline-block align-top p1-2" />
</a>

       </Navbar.Brand>

       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav" >
       <Nav className="navLinks mx-auto">
        <Nav.Link id="navHome" className=' justify-content-center'href="./home.js">HOME</Nav.Link>
        <Nav.Link href="#services">SERVICES</Nav.Link>
        <Nav.Link href="#faq">FAQ</Nav.Link>
        <Nav.Link href="#about-us">ABOUT</Nav.Link>
  </Nav>
{/* search bar */}
      <Form>
       <InputGroup>
        <Button variant="outline-secondary">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
        <FormControl type="text" placeholder="What are you looking for?" className="mr-sm-2 border border-dark" />
        <Button variant="outline-secondary">
          <FontAwesomeIcon icon={faMicrophone} />
        </Button>
       </InputGroup>
      </Form>
        </Navbar.Collapse>
      </Container>
  </Navbar>
</div>
);
}
export default Navi;