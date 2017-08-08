import React, { Component } from 'react';
import Header from './header';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import AboutText from './about.text';
import './App.css';


class About extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Jumbotron>
          <h1 className="center">Welcome to SportsTalk</h1>
          <AboutText/>
          </Jumbotron>
        </div>
        
    );
  }
}

export default About;
