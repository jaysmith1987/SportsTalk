import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import{Col} from 'react-bootstrap'
import UserRank from '../tables/userRank';
import HomeArticle from '../articles/homeArt.js';



class Home extends Component {
  render() {
    return (
      <div >
        <Col xs={6} md={3} style={{marginLeft:'0px'}}>
          <UserRank/>
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
