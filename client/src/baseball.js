import React, { Component } from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';
import IMG1 from './baseball.png';





class Baseball extends Component {
  render() {
    return (
      <div className="Carousel">
      <Carousel>
    <Carousel.Item>
      <img width={300} height={400}  src={IMG1}/>
      <Carousel.Caption>
        <h3><span className="glyphicon glyphicon-fire red"></span><label className="black">#1 Baseball Article</label><span className="glyphicon glyphicon-fire red"></span></h3>
        <p className="sub-title">Get Title</p>
      </Carousel.Caption>
      
    </Carousel.Item>
    <Carousel.Item>
      <img width={300} height={400}  src={IMG1}/>
      <Carousel.Caption>
        <h3><span className="glyphicon glyphicon-fire red"></span><label className="black">#2 Baseball Article</label><span className="glyphicon glyphicon-fire red"></span></h3>
        <p className="sub-title">Get Title</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={300} height={400}  src={IMG1}/>
      <Carousel.Caption>
        <h3><span className="glyphicon glyphicon-fire red"></span><label className="black">#3 Baseball Article</label><span className="glyphicon glyphicon-fire red"></span></h3>
        <p className="sub-title">Get Title</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
    );
  }
}

export default Baseball;
