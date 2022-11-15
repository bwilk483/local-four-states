import React from "react";

import "../layout.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AboutInfo from "../../components/About/AboutInfo";

const About = () => {
  return (
    <div className="layoutContainer">
      <Navbar />
      <AboutInfo />
      <Footer />
    </div>
  );
};

export default About;
