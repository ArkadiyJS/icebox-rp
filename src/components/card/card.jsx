import React from 'react';
import Carousel from '../carousel/carousel';
import IceboxStats from '../stats/iceboxStats';

const Card = ({ id, name, height, width, depth, polki, image }) => {
  return (
    <div className="card">
      <div className="carusel">
        <Carousel image={image} />
      </div>

      <div className="statsCard">
        <IceboxStats
          id={id}
          name={name}
          height={height}
          width={width}
          depth={depth}
          polki={polki}
        />
      </div>
      {/* <button className="bronirovka">забронировать</button> */}
    </div>
  );
};

export default Card;
