import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';



class Home extends Component {
  render() {
    return (
      <div style={{marginTop:'100px'}}>
        <Jumbotron>
          <h1 style={{textAlign:'center'}}><b>Home Page</b></h1>
          </Jumbotron>
        </div>

    );
  }
}

export default Home;
