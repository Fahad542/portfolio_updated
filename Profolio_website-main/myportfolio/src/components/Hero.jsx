import React from "react";
import { motion } from "framer-motion";
import MobileCanvas from "./Mobile";
import Particle from "./Particles";

const Hero = () => {
  return (
    <>
   
    <div className="container hero-section">
      <div className="row d-flex align-items-center">
        <motion.div
          animate={{
            y: [0, 30, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="col-md-7"
        >
          <div className="round"></div>
          <div className="line"></div>
          <div className="hero">
            <a className="herotext">Hi I'm Fahad Shafiq</a>
            {/* <p className="hero-text ">
              Hi I am <span className="myname">Fahad</span>
            </p> */}
            <p>Frontend Developer</p>

            {/* Frontend Developer

Download CV
Contact Me */}

            <div className="hero-buttons">
              <button className="button">Download CV</button>
              <button className="button">Contact Me</button>
            </div>
          </div>
        </motion.div>

        <div className="mobilediv col-md-5">
          <MobileCanvas />
        </div>
      </div>
    </div>

    </>
  );
};

export default Hero;