import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Start() {
    return (
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home" style={{fontStyle:"italic",fontSize:"40px",fontWeight:"bold",color:"rgb(211, 61, 211)"}}>Where You Watch</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home"  style={{fontSize:"20px",fontWeight:"bold",color:"rgb(15, 63, 63)",marginLeft:"30px"}}>Home</Nav.Link>
          <Nav.Link href="#about-us"  style={{fontSize:"20px",fontWeight:"bold",color:"rgb(15, 63, 63)",marginLeft:"20px"}}>About US</Nav.Link>
          <Nav.Link href="#contact"  style={{fontSize:"20px",fontWeight:"bold",color:"rgb(15, 63, 63)",marginLeft:"20px"}}>Contact US</Nav.Link>
        </Nav>
      </Navbar>
      )
    }
    
    export default Start
