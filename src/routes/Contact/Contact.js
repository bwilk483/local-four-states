import React from "react";

import "../layout.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactHero from "../../components/Heros/HeroContact";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="layoutContainer">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
