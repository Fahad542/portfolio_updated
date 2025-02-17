import AnimatedCard from "../Widgets/Animated_card";
import Skill_card from "../Widgets/Skill_card";
import flutter from "../assets/Icons/flutter_image.png";
import react_native from "../assets/Icons/react_native.png";
import angular from "../assets/Icons/angular.png";
import sqflite from "../assets/Icons/sqflite.png";
import firebase from "../assets/Icons/firebase.png";
import api from "../assets/Icons/api.png";
import BallCanvas from "./Ball";
import Skill_bar from "./Skill_bar";
import Timeline from "./Timeline";
import React from "react";

const About = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} id="about" className="container about text-center pt-3">
      <h1 className="oleo intro-h">My Intro</h1>
      <p className="into-text">
        A highly skilled Flutter developer with Two year of experience in
        developing cross-platform mobile applications. Proficient in Dart
        programming language and familiar with various Flutter libraries and
        frameworks. Strong understanding of mobile app development best
        practices and UI/UX principles. Excellent problem-solving skills and
        ability to work in a fast-paced, collaborative environment.
      </p>
      <h1 className="oleo do-h" style={{ marginTop: "90px" }}>
        What I can do?
      </h1>

      <div className="d-flex  flex-row flex-wrap justify-content-center gap-10 ">
       <div class="ball-div"  >
        <BallCanvas icon={flutter} />
       </div>
        
    
       <div class="ball-div" >
              <BallCanvas icon={react_native} />
      </div>
  
    
      <div class="ball-div" >
               <BallCanvas icon={firebase} />
       </div>
 
     
       <div class="ball-div" >
        <BallCanvas icon={angular} />
  </div>
     

    

  <div class="ball-div" >
     <BallCanvas icon={sqflite} />
  </div>
       
  <div class="ball-div" >
    <BallCanvas icon={firebase} />
   </div>
        
   <div class="ball-div" >
        <BallCanvas icon={api} />
       </div>
        
  
      

      </div>
        

       
      <div className="row card2">
        <div className="col-sm-4 center-col">
          <Skill_card
            heading="MOBILE APPS DEVELOPEMENT"
            description="I can develop best of the best Android and Ios app for you using Flutter framework. I am using best approaches and patterns that I have learned. I have a good experience on flutter state management using bloc, provider and getx. I always keep user experience in mind while writing code so that app is always responsive and fast."
          />
        </div>
        <div className="col-sm-4 center-col">
          <Skill_card
            heading="MOBILE APPS DEVELOPEMENT"
            description="I can develop best of the best Android and Ios app for you using Flutter framework. I am using best approaches and patterns that I have learned. I have a good experience on flutter state management using bloc, provider and getx. I always keep user experience in mind while writing code so that app is always responsive and fast."
          />
        </div>
        <div className="col-sm-4 center-col">
          <Skill_card
            heading="MOBILE APPS DEVELOPEMENT"
            description="I can develop best of the best Android and Ios app for you using Flutter framework. I am using best approaches and patterns that I have learned. I have a good experience on flutter state management using bloc, provider and getx. I always keep user experience in mind while writing code so that app is always responsive and fast."
          />
        </div>
      </div>

      <h1 className="oleo do-h" style={{ marginTop: "90px" }}>
        Proficiency
      </h1>
      <Skill_bar skillName={"Flutter"} percentage={89} />
      <Skill_bar skillName={"Dart"} percentage={80} />
      <Skill_bar skillName={"Rest Apis"} percentage={75} />
      <Skill_bar skillName={"Firebase"} percentage={70} />
      <Skill_bar skillName={"Sqflite"} percentage={70} />
      <Skill_bar skillName={"React Native"} percentage={60} />
      <Skill_bar skillName={"HTML"} percentage={50} />
      <Skill_bar skillName={"CSS"} percentage={40} />

      <div className="timeline-container">
        <Timeline />
      </div>
    </div>
  );
});

export default About;
