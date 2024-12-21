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
// import { Canvas } from '@react-three/fiber';
function App() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;
  return (
    <>
      <div>

        <div class="circle circle1"></div>
        <div class="circle circle2"></div>
        <div class="circle circle3"></div>
        <Navbar timeline={tl} ease={ease} />
        <Hero />
        <About />
        <Project />
        <div className="container d-flex justify-content-center">
        <Contact_us/>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
