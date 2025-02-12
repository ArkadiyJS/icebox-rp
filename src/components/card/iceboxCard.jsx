import React from "react";
import IceboxStats from "./stats/iceboxStats";
import Carousel from "./carousel/carousel";

const IceboxCard = () => {
  return (
    <div className="icebox" >
        {/* <div className="overlay"></div> */}
      <Carousel />

      <IceboxStats />
    </div>
  );
};
export default IceboxCard;
