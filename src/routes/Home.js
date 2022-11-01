import React from "react";
import "./layout.css";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Home/Header/Header";
import Cat from "../components/Home/Categories/Cat";

const Home = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <Header />
      <Cat />
    </div>
  );
};

export default Home;
