import React, { Component } from 'react';
import Header from './header';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import About from './about';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        </div>
        
    );
  }
}

export default App;
