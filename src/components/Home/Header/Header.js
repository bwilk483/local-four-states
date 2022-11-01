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
        <img className="link-image" src="./img/support.png" alt=""></img>
        <img className="link-image" src="./img/support.png" alt=""></img>
        <img className="link-image" src="./img/support.png" alt=""></img>
        <img className="link-image" src="./img/support.png" alt=""></img>
      </div>
    </div>
  );
};

export default Header;
