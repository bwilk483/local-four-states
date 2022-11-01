import React from "react";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { url: "./img/homeSlider/slider.png", title: "Home Slider 1" },
    { url: "./img/support.png", title: "Home Slider 2" },
    { url: "./img/homeSlider/slider.png", title: "Home Slider 3" },
    { url: "./img/support.png", title: "Home Slider 4" },
    { url: "./img/homeSlider/slider.png", title: "Home Slider 5" },
  ];

  const sliderStyle = {
    height: "100%",
    position: "relative",
  };

  const slideStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={sliderStyle}>
      <FaAngleLeft
        size={45}
        onClick={goToPrevious}
        style={{
          position: "absolute",
          top: "50%",
          transform: "translate(0, -50%)",
          left: "32px",
          color: "#fff",
          marginRight: "2rem",
          xIndex: "1",
          curser: "pointer",
        }}
      />
      <FaAngleRight
        size={45}
        onClick={goToNext}
        style={{
          position: "absolute",
          top: "50%",
          transform: "translate(0, -50%)",
          right: "32px",
          color: "#fff",
          marginRight: "2rem",
          xIndex: "1",
          curser: "pointer",
        }}
      />
      <div style={slideStyle}></div>
    </div>
  );
};

export default Slider;
