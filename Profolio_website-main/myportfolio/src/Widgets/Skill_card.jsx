import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt"; // Import Vanilla Tilt

const Skill_card = ({ heading, description }) => {
  useEffect(() => {
    const tiltElements = document.querySelectorAll(".about-card");
    VanillaTilt.init(tiltElements, {
      max: 25, // Maximum tilt angle
      speed: 500, // Speed of the tilt effect
      scale: 1.05, // Scale the element on tilt
    });

    // Clean up the tilt effect on component unmount
    return () => {
      tiltElements.forEach((element) => element.vanillaTilt.destroy());
    };
  }, []);

  return (
    <div className="about-card">
      <div className="about-card-content">
        <h1 className="card-heading">{heading}</h1>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Skill_card;
