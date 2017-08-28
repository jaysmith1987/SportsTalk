import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import{Col, Button, Panel} from 'react-bootstrap'
import UserRank from '../tables/userRank';
import HomeArticle from '../articles/homeArt.js';



class Home extends Component {
  render() {
    return (
      <div >
        <Col xs={6} md={3} style={{marginLeft:'0px'}}>
          <UserRank/>
          </Col>
          <Col xs={6} md={3}>
          <Jumbotron style={{marginTop: '60px', marginLeft:'100px', width:'500px', height:'300px', border:'2px solid black'}}>
            <h1 style={{textAlign: 'center'}}>Latest Blog</h1>
            <p style={{textAlign:'center'}}>Blog snippet</p>
            <Button bsStyle="info" style={{marginLeft:'80px', marginTop: '40px'}}>Read Article</Button>
          </Jumbotron>
          </Col>
          <br/><br/><br/>
          <Col xs={6} md={3} className="article">
          <HomeArticle />
          </Col>
        </div>

    );
  }
}

export default Home;
