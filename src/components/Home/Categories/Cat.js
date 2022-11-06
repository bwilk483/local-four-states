import React from "react";

import "./cat.css";

const Cat = () => {
  return (
    <div className="catContainer">
      <h1 className="catTitle"> Popular business categories</h1>
      <div className="catUnderline">----------------------</div>
      <div className="catLinkContainer">
        <div className="catLinkImg catShop">
          <h1 className="catLinkText">Shopping & Retail</h1>
        </div>
        <div className="catLinkImg catTrucks">
          <h1 className="catLinkText">Food Trucks</h1>
        </div>
        <div className="catLinkImg catFood">
          <h1 className="catLinkText">Food & Beverages</h1>
        </div>
        <div className="catLinkImg catServices">
          <h1 className="catLinkText">Professional Services</h1>
        </div>
        <div className="catLinkImg catBeauty">
          <h1 className="catLinkText">Health & Beauty</h1>
        </div>
        <div className="catLinkImg catEntertainment">
          <h1 className="catLinkText">Entertainment & Events</h1>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
};

export default Cat;
