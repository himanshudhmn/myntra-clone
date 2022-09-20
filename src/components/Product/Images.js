import React from "react";
import "./Images.css";

const Images = (props) => {
  return (
    <React.Fragment>
      <div className="i-wrapper">
        <div className="i-details">
          <img className="specs" src={props.imgMain} alt="" />
        </div>
        <div className="i-details">
          <img className="specs" src={props.img2} alt="" />
        </div>
        <div className="i-details">
          <img className="specs" src={props.img3} alt="" />
        </div>
        <div className="i-details">
          <img className="specs" src={props.img4} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Images;
