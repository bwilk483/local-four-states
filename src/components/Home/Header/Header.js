import React from "react";
import "./header.css";

import ImageSlider from "../HomeSlider/Slider";

const Header = () => {
  return (
    <div className="header-container">
      <div className="slide-container">
        <ImageSlider />
      </div>
      <div className="header-links">
        <div className="img-container">
          <img
            className="link-image"
            src="./img/header/signUp.jpg"
            alt=""
          ></img>
          <div className="front-img">
            <div>Sign Up</div>
            <div>Your Business</div>
          </div>
        </div>
        <img className="link-image" src="./img/support.png" alt=""></img>
        <img className="link-image" src="./img/support.png" alt=""></img>
        <img className="link-image" src="./img/support.png" alt=""></img>
        <img className="link-image" src="./img/support.png" alt=""></img>
        <img className="link-image" src="./img/support.png" alt=""></img>
      </div>
    </div>
  );
};

export default Header;
