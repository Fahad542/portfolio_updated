import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import My_projects from "./components/My_projects";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { gsap, Power3 } from "gsap";
import Project from "./components/Project";
import Contact_us from "./components/Contact_us";
import Footer from "./components/Footer";
import bgvideo from "./assets/videos/background.mp4";
import imggg from "./assets/Icons/app3.png";
import React, { useRef } from "react";
// import { Canvas } from '@react-three/fiber';
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  // const blogRef = useRef(null);

  let tl = new gsap.timeline();
  let ease = Power3.easeOut;
  return (
    <>
     
{/* 
        <div class="circle circle1"></div>
        <div class="circle circle2"></div>
        <div class="circle circle3"></div> */}
        {/* <div className="helloworld">
          <Navbar timeline={tl} ease={ease} />
          <Hero />
        </div> */}
       

       <div class="bg-video-div">
        <video src={bgvideo} autoPlay loop muted></video>
        <Navbar timeline={tl} ease={ease} homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} projectsRef={projectsRef}  />
          <Hero ref={homeRef} />
       </div>


       
        <About ref={aboutRef} />
        <Project ref={projectsRef} />
        <div className="container d-flex justify-content-center">
        <Contact_us ref={contactRef} />
        </div>
        <Footer />
      
    </>
  );
}

export default App;
