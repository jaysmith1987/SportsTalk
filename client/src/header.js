import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import {Link} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import logo from './sports.jpg';



class Header extends Component {
    render(){
    return (   
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
      <img src={logo} className="main-img img-rounded" alt="logo" />
      </Navbar.Brand>
      <Navbar.Brand>
        <a href="/"><span className="text">Sports</span><span className="text-offset">Talk</span></a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
    <NavDropdown className="titles" eventKey={1} title="Basketball" id="basketball-dropdown">
        <MenuItem  href="/Basketball"><span className="link-color">Main</span></MenuItem>
        <MenuItem  href="/HSB"><span className="link-color">HSBB</span></MenuItem>
        <MenuItem  href="/CBB"><span className="link-color">CBB</span></MenuItem>
        <MenuItem  href="/G"><span className="link-color">G League</span></MenuItem>
        <MenuItem  href="/NBA"><span className="link-color">NBA</span></MenuItem>
    </NavDropdown>
     <NavDropdown className="titles" eventKey={2} title="Football" id="basketball-dropdown">
        <MenuItem href="/Football"><span className="link-color">Main</span></MenuItem>
        <MenuItem href="/HSFB"><span className="link-color">HSFB</span></MenuItem>
        <MenuItem href="/CFB"><span className="link-color">CFB</span></MenuItem>
        <MenuItem href="/NFL"><span className="link-color">NFL</span></MenuItem>
    </NavDropdown>
     <NavDropdown className="titles" eventKey={3} title="Baseball" id="basketball-dropdown">
        <MenuItem href="/Baseball"><span className="link-color">Main</span></MenuItem>
        <MenuItem href="/HSBB"><span className="link-color">HSBB</span></MenuItem>
        <MenuItem href="/CBBa"><span className="link-color">CBB</span></MenuItem>
        <MenuItem href="/Minors"><span className="link-color">Minors</span></MenuItem>
        <MenuItem href="/MLB"><span className="link-color">MLB</span></MenuItem>
    </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem  className="titles" eventKey={4} href="/Create">Create</NavItem>
      <NavItem  className="titles"  eventKey={5} href="/register">Register</NavItem>
      <NavItem  className="titles"  eventKey={6} href="/login">Login</NavItem>
      <NavItem  className="titles"eventKey={7} href="/about">About</NavItem>
    </Nav>
  </Navbar>
);
    }
}

export default Header;