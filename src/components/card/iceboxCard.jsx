import React from "react";
import IceboxStats from "./stats/iceboxStats";
import Carousel from "./carousel/carousel";

const IceboxCard = ({ pickIcebox, setPickIcebox }) => {
  return (
    <div className="icebox" style={pickIcebox ? { opacity: '0.6', textDecoration: 'line-through', textDecorationColor: 'red' } : {}} >



      <Carousel />

      <IceboxStats pickIcebox={pickIcebox} setPickIcebox={setPickIcebox} />

    </div>
  );
};
export default IceboxCard;
