import React, { Component } from 'react';
import Header from './header';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';




class Baseball extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1 className="center">Baseball</h1>
          </Jumbotron>
        </div>
        
    );
  }
}

export default Baseball;
