import React from "react";
import "./layout.css";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Home/Header/Header";

const Home = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <Header />
    </div>
  );
};

export default Home;
