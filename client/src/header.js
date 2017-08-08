import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import {Link} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';


class Header extends Component {
    render(){
    return (   
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/"><span className="text">Sports</span><span className="text-offset">Talk</span></a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
    <NavDropdown className="titles" eventKey={1} title="Basketball" id="basketball-dropdown">
        <MenuItem eventKey={1.1}><Link to="/Basketball">Main</Link></MenuItem>
        <MenuItem eventKey={1.1}><Link to="/HSB">HSB</Link></MenuItem>
        <MenuItem eventKey={1.2}><Link to="/CBB">CBB</Link></MenuItem>
        <MenuItem eventKey={1.3}><Link to="/G">G League</Link></MenuItem>
        <MenuItem eventKey={1.4}><Link to="/NBA">NBA</Link></MenuItem>
    </NavDropdown>
     <NavDropdown className="titles" eventKey={2} title="Football" id="basketball-dropdown">
        <MenuItem eventKey={2.1}><Link to="/Football">Main</Link></MenuItem>
        <MenuItem eventKey={2.1}><Link to="/HSFB">HSFB</Link></MenuItem>
        <MenuItem eventKey={2.2}><Link to="/CFB">CFB</Link></MenuItem>
        <MenuItem eventKey={2.3}><Link to="/NFL">NFL</Link></MenuItem>
    </NavDropdown>
     <NavDropdown className="titles" eventKey={3} title="Baseball" id="basketball-dropdown">
        <MenuItem eventKey={3.1}><Link to="/Baseball">Main</Link></MenuItem>
        <MenuItem eventKey={3.1}><Link to="/HSBB">HSBB</Link></MenuItem>
        <MenuItem eventKey={3.2}><Link to="/CBBa">CBB</Link></MenuItem>
        <MenuItem eventKey={3.3}><Link to="/Minors">Minors</Link></MenuItem>
        <MenuItem eventKey={3.4}><Link to="/MLB">MLB</Link></MenuItem>
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