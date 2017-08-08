import React, { Component } from 'react';
import logo from './sports.jpg';
import Header from './header';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import AboutText from './about.text';
import './App.css';


class About extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="center"><label>Welcome to SportsTalk</label></h2>
          <AboutText/>
          </Jumbotron>
        </div>
        
    );
  }
}

export default About;
