import React, { useRef, useState } from "react";

const Navbar = ({ homeRef, aboutRef, contactRef, projectsRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


    const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false); // Close menu on mobile
  };

  return (
    <div className="header sticky-top d-flex align-items-center">
      <p className="mylogo">Fahad Shafiq</p>

      <div className={`custom-nav ${isOpen ? "open" : ""}`}>
        <a className="link" onClick={() => scrollToSection(homeRef)}>Home</a>
        <a className="link" onClick={() => scrollToSection(aboutRef)}>About</a>
        <a className="link" onClick={() => scrollToSection(contactRef)}>Contact</a>
        <a className="link" onClick={() => scrollToSection(projectsRef)}>Projects</a>
        {/* <a className="link" onClick={() => scrollToSection(blogRef)}>Blog</a> */}
      </div>

      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
