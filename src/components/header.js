"use strict"
import React from 'react';
import {Nav, NavItem, Navbar, NavDropdown, Label} from 'react-bootstrap';


class Header extends React.Component{
    render(){
        return(
          <div>
     <Navbar inverse fixedTop>
    <Navbar.Header>
      <Navbar.Brand href="/">
       <i className="material-icons" style={{color:'blue', size:'36px'}} >&#xe61d;</i>
      </Navbar.Brand>
      <Navbar.Brand>
       <a href="/"><b>SportsTalk<span style={{textTransform:'lowercase'}}>pro</span></b></a>
       </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
     <Nav>
    <NavItem eventKey={1} href="/basketball">Basketball</NavItem>
    <NavItem eventKey={2}  href="/football">Football</NavItem>
    <NavItem eventKey={3} href="/baseball">Baseball</NavItem>
    </Nav>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={2} href="/contacts">Contact Us</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem  eventKey={4} href="/posts">Create Post</NavItem>
        <NavItem  eventKey={5} href="/register">Register</NavItem>
        <NavItem  eventKey={6} href="/login">Login</NavItem>
        <NavItem  eventKey={7} href="/about">About</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>

        )
    }
}

export default Header;