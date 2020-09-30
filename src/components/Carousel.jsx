import React from 'react';

const Carousel = ({ items, itemMargin, imageWidth }) => {
  imageWidth = +imageWidth;
  itemMargin = +itemMargin;

  const itemCount = items.length;
  const itemWidth = imageWidth + itemMargin * 2;

  const [position, setPosition] = React.useState(itemMargin);
  const [currentSlide, setSlide] = React.useState(1);

  const leftLimit = itemMargin;
  const rightLimit = -((itemCount - 1) * imageWidth);

  const next = () => {
    setPosition( position - itemWidth );
    setSlide(currentSlide + 1);
  };

  const prev = () => {
    setPosition(position + itemWidth);
    setSlide(currentSlide - 1);
  };

  return (
    <div className="carousel">
      <div
        style={{ transform: `translate(${position}px)` }}
        className="carousel__img"
      >
        { items.map( (img, index) => (
          <div
            key={img + index}
            style={{ margin: `0 ${itemMargin}px`, minWidth: `0 ${imageWidth}px` }}
            className="carousel__img__item"
          >
            <img alt={'carousel_item'} src={img} />
          </div>
        ))}
      </div>
      <button
        className="button carousel__button prev"
        disabled={position >= leftLimit}
        onClick={() => prev()}
      >
        &#10094;
      </button>
      <button
        className="button carousel__button next"
        disabled={position <= rightLimit}
        onClick={() => next()}
      >
        &#10095;
      </button>
      <div className="carousel__bar">
        <div
          style={{
            width: `${100 / itemCount}%`,
            transform: `translateX(${(currentSlide - 1) * 100}%)`,
          }}
          className="carousel__bar__item"
        ></div>
      </div>
    </div>
  );
};

export default Carousel;
