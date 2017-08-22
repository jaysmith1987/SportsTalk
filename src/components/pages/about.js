import React, { Component } from 'react';
import {Jumbotron, Panel} from 'react-bootstrap';
import AboutText from './about.text';


class About extends Component {
  render() {
    return (
      <div style={{marginTop:'100px'}}>
        <Panel>
        <Jumbotron >
        <h2 style={{textAlign:'center'}}><b>Welcome to SportsTalk</b></h2>
          <AboutText/>
          </Jumbotron>
          </Panel>
        </div>
        
    );
  }
}

export default About;
