import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import About from './about';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          Home Page
          </Jumbotron>
        </div>

    );
  }
}

export default App;
