import React from 'react';
import '../css/contactus.css';
import boy from "../assets/Icons/boy.png";
import boy1 from "../assets/Icons/boy1.png";


const ContactUs = React.forwardRef((props, ref) => {
  return (
    <>
    <div class="contcontainer">
        <img src={boy1}  alt="Girl" class="girl-image"/>
        <form class="contact-form">
            <h2>Contact Us</h2>
            <div class="form-group1">
                <input className='inputclass' type="text" placeholder="Your Name" required />
            </div>
            <div class="form-group1">
                <input className='inputclass' type="email" placeholder="Your Email" required />
            </div>
            <div class="form-group1">
                <textarea className='textclass' placeholder="Your Message" required></textarea>
            </div>
            <button class="submit-button" type="submit">Send Message</button>
        </form>
    </div>
      {/* <div ref={ref} id="contact" className="contact-container">
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
      </div> */}
    {/* </div> */}

    </>
  );
});

export default ContactUs;



  
  // /* Contact container */
  // .contact-container {
  //   width: 100%;
  //   max-width: 500px;
  //   padding: 20px;
  // }
  
  // /* Form background */
  // .form-background {
  //   background: linear-gradient(135deg, rgba(168, 0, 168, 0.1), rgba(255, 255, 255, 0));
  //   backdrop-filter: blur(1px);
  //   -webkit-backdrop-filter: blur(1px);
  //   border-radius: 20px;
  //   box-shadow: 0 8px 32px 0 rgba(103, 99, 99, 0.37);
  //   border: 1px solid rgba(255, 255, 255, 0.18);
  //   padding: 40px;
  // }
  
  // .form-background h2 {
  //   text-align: center;
  //   margin-bottom: 20px;
  //   font-size: 24px;
  //   font-weight: bold;
  // }
  
  // /* Form */
  // .contact-form label {
  //   display: block;
  //   margin-bottom: 8px;
  //   font-size: 14px;
  // }
  
  // .contact-form input,
  // .contact-form textarea {
  //   width: 100%;
  //   padding: 10px;
  //   margin-bottom: 20px;
  //   border: none;
  //   border-radius: 8px;
  //   font-size: 14px;
  // }
  
  // .contact-form input {
  //   height: 40px;
  // }
  
  // .contact-form textarea {
  //   resize: none;
  // }
  
  // .contact-form button {
  //   width: 100%;
  //   padding: 12px;
  //   background-color: #5c0a51;
  //   color: #ffffff;
  //   border: 1px solid #615d61;
  //   box-shadow: 0 8px 32px 0 rgba(103, 99, 99, 0.37);
  //   border-radius: 8px;
  //   font-size: 16px;
  //   font-weight: bold;
  //   cursor: pointer;
  //   transition: background-color 0.3s ease;
  // }
  
  // .contact-form button:hover {
  //   background-color: #000000;
  //   color: #ffffff;
  // }
  
  // /* Responsive Design */
  // @media (max-width: 600px) {
  //   .form-background {
  //     padding: 20px;
  //   }
  
  //   .form-background h2 {
  //     font-size: 20px;
  //   }
  
  //   .contact-form button {
  //     font-size: 14px;
  //   }
  // }
  
