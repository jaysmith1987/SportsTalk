import React, { Component } from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';
import IMG1 from './basketball4.png';


class Basketball extends Component {
  render() {
    return (
      <div className="Carousel">
      <Carousel>
    <Carousel.Item>
      <img width={300} height={500}  src={IMG1}/>
      <Carousel.Caption>
        <h3><span className="glyphicon glyphicon-fire red"></span><label className="black">#1 Basketball Article</label><span className="glyphicon glyphicon-fire red"></span></h3>
        <p className="sub-title">Get Title</p>
      </Carousel.Caption>
      
    </Carousel.Item>
    <Carousel.Item>
      <img width={300} height={500}  src={IMG1}/>
      <Carousel.Caption>
        <h3><span className="glyphicon glyphicon-fire red"></span><label className="black">#2 Basketball Article</label><span className="glyphicon glyphicon-fire red"></span></h3>
        <p className="sub-title">Get Title</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={300} height={500}  src={IMG1}/>
      <Carousel.Caption>
        <h3><span className="glyphicon glyphicon-fire red"></span><label className="black">#3 Basketball Article</label><span className="glyphicon glyphicon-fire red"></span></h3>
        <p className="sub-title">Get Title</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
    );
  }
}

export default Basketball;
