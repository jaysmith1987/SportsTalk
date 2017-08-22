import React, { Component } from 'react';
import Header from './header';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';




class NotFound extends Component {
  render() {
    return (
      <div style={{marginTop:'100px'}}>
        <Jumbotron>
          <h1 className="center">Page NotFound</h1>
          </Jumbotron>
        </div>
        
    );
  }
}

export default NotFound;
