import React, { useState } from "react";
import icebox from "../../.././assets/wintersCurse.webp";
import icebox2 from "../../.././assets/wintersCurse2.webp";
import icebox3 from "../../.././assets/wintersCurse3.webp";
import s from "./carousel.module.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    icebox,
    icebox2,
    icebox3];


//   const images = [
//     'https://avatars.mds.yandex.net/i?id=eefb4c166f681badd2c5a18bec425052ad48daca-7862872-images-thumbs&n=13',
//     'https://avatars.mds.yandex.net/i?id=eefb4c166f681badd2c5a18bec425052ad48daca-7862872-images-thumbs&n=13',
//     'https://avatars.mds.yandex.net/i?id=eefb4c166f681badd2c5a18bec425052ad48daca-7862872-images-thumbs&n=13'];




  const moveSlide = (direction) => {
    const newIndex = (currentIndex + direction + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="h_o">
      <div className={s.carousel}>
        <div
          className={s.carouselImages}
          style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
        <button  className={s.prev} onClick={() => moveSlide(-1)}>
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
