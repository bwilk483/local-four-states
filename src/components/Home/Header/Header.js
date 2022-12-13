import React from "react";
import "./header.css";

import ImageSlider from "../HomeSlider/Slider";

const Header = () => {
  return (
    <div className="header-container">
      <div className="slide-container">
        <h1 className="headerSponsors">Sponsors</h1>
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
        <div className="img-container">
          <img className="link-image" src="./img/support.png" alt=""></img>
          <div className="front-img">
            <div>Find A</div>
            <div>Local business</div>
          </div>
        </div>
        <div className="img-container">
          <img className="link-image" src="./img/support.png" alt=""></img>
          <div className="front-img">
            <div>Blog About</div>
            <div>local Businesses</div>
          </div>
        </div>
        <div className="img-container">
          <img className="link-image" src="./img/support.png" alt=""></img>
          <div className="front-img">
            <div>Upcoming</div>
            <div>Events</div>
          </div>
        </div>
        <div className="img-container">
          <img className="link-image" src="./img/support.png" alt=""></img>
          <div className="front-img">
            <div>Local</div>
            <div>News</div>
          </div>
        </div>
        <div className="img-container">
          <img className="link-image" src="./img/support.png" alt=""></img>
          <div className="front-img">
            <div>Sponsors</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
