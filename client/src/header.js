import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';


class Header extends Component {
    render(){
    return (   
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">SportsTalk</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavDropdown eventKey={1} title="Basketball" id="basketball-dropdown">
        <MenuItem eventKey={1.1}>HSB</MenuItem>
        <MenuItem eventKey={1.2}>CFB</MenuItem>
        <MenuItem eventKey={1.3}>G League </MenuItem>
        <MenuItem eventKey={1.4}>NBA </MenuItem>
    </NavDropdown>
     <NavDropdown eventKey={2} title="Football" id="basketball-dropdown">
        <MenuItem eventKey={2.1}>HSFB</MenuItem>
        <MenuItem eventKey={2.2}>CFB</MenuItem>
        <MenuItem eventKey={2.3}>NFL</MenuItem>
    </NavDropdown>
     <NavDropdown eventKey={3} title="Basetball" id="basketball-dropdown">
        <MenuItem eventKey={3.1}>HSBB</MenuItem>
        <MenuItem eventKey={3.2}>CBB </MenuItem>
        <MenuItem eventKey={3.3}>Minors</MenuItem>
        <MenuItem eventKey={3.4}>MLB</MenuItem>
    </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={4} href="/register">Register</NavItem>
      <NavItem eventKey={5} href="/login">Login</NavItem>
      <NavItem eventKey={6} href="/about">About</NavItem>
    </Nav>
  </Navbar>
);
    }
}

export default Header;