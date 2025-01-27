import React, { useState } from 'react';
// import './carousel.css'; // Импортируйте стили

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://remtorgholod.ru/upload/iblock/2ba/2ba8d1c1d79d0738052d813328e0922a.jpg',
    'https://remtorgholod.ru/upload/iblock/2ba/2ba8d1c1d79d0738052d813328e0922a.jpg',
    'https://remtorgholod.ru/upload/iblock/2ba/2ba8d1c1d79d0738052d813328e0922a.jpg'
  ];

  const moveSlide = (direction) => {
    const newIndex = (currentIndex + direction + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-images" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
      <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
    </div>
  );
};

export default Carousel;
