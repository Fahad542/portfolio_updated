import React from 'react';
import '../css/contactus.css';

const ContactUs = () => {
  return (
    <>
      <div className="contact-container">
        <div className="form-background">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
