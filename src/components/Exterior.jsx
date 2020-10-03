import React from 'react';

import Carousel from './Carousel'; //Самописный кампонент карусели вместо Swiper, опционально.
import { Swiper, SwiperSlide } from 'swiper/react';


const Exterior = () => {

  return (
    <div className="exterior">
      <div className="container">
        <h2 className="title">Exterior</h2>
        <div className="subtitle">
          The forward-looking front features the 'Sensures Sporty' design
          directionality and captures a new design vision, from the sleek,
          sporty side to the rear with a wide rear lamp.
        </div>
        <div className="swiper-cont"><Swiper
          spaceBetween={52}
          slidesPerView={1}
        >
          {[1, 2, 1].map(( img, index) => (
            <SwiperSlide key={img+index}>
              <picture>
                <source media="(max-width: 320px)" srcSet={`/img/mobile/carousel_${img}.png`} />
                <source media="(min-width: 321px)" srcSet={`/img/desk/carousel_${img}.jpg`} />
                <img alt={'carousel_item'} src={`/img/desk/carousel_${img}.jpg`}/>
              </picture>
              {/*<img alt={'carousel_item'} src={img}/>*/}
            </SwiperSlide>))}
        </Swiper></div>
        {/* <Carousel items={[carousel_1, carousel_2, carousel_1]} imageWidth={1080} itemMargin={26} />*/}
      </div>
    </div>
  );
};

export default Exterior;
