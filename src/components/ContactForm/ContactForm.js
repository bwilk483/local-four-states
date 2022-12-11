import React from "react";

import "./ContactFormStyles.css";

const ContactForm = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="text"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type Your Message Here"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
