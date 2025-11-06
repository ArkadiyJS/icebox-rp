import React, { useState } from 'react';

import s from './carousel.module.css';

const Carousel = ({ image }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = image;

  const moveSlide = (direction) => {
    const newIndex = (currentIndex + direction + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div className={s.carousel}>
        <div
          className={s.carouselImages}
          style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
        <button className={s.prev} onClick={() => moveSlide(-1)}>
          &#10094;
        </button>
        <button className={s.next} onClick={() => moveSlide(1)}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
