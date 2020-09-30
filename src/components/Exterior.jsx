import React from 'react';

import Carousel from './Carousel';
import carousel_1 from '../img/carousel_1.png';
import carousel_2 from '../img/carousel_2.png';

const Exterior = () => {
  const images = [carousel_1, carousel_2, carousel_1];
  return (
    <div className="exterior">
      <div className="container">
        <h2 className="title">Exterior</h2>
        <div className="subtitle">
          The forward-looking front features the 'Sensures Sporty' design
          directionality and captures a new design vision, from the sleek,
          sporty side to the rear with a wide rear lamp.
        </div>
        <Carousel items={images} imageWidth={1080} itemMargin={26} />
      </div>
    </div>
  );
};

export default Exterior;
