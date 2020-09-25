import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import linkedin from "../images/linkedin.png";
import github from "../images/github.svg";
import email from "../images/email-icon.png";
import background from "../images/img-home.jpg";
const HeroSection = () => {
  return (
    // <div className="cover">
    //   <div className="hero-container">
    //     <div className="hero-typewriter">
    //       <h1>Hi, I'm Michael. A Software Engineer.</h1>
    //     </div>
    //     <div className="contact-container">
    //       <h1 className="contact-icons">
    //         <img
    //           className="contact"
    //           src={linkedin}
    //           onClick={() =>
    //             window.open("https://www.linkedin.com/in/vomichaelminh")
    //           }
    //           alt="alt"
    //         />
    //         <img
    //           className="contact"
    //           src={github}
    //           onClick={() =>
    //             window.open("https://www.github.com/vomichaelminh")
    //           }
    //           alt="alt"
    //         />
    //         <img
    //           className="contact"
    //           src={email}
    //           onClick={() => window.open("mailto:vomm@uci.edu")}
    //           alt="alt"
    //         />
    //       </h1>
    //     </div>
    //     <div className="hero-btns">

    //     </div>
    //   </div>
    // </div>

    <div className="cover-section">
      <img className="background-cover" src={background} alt="alt" />

      <h1 className="introduction">
        <div className="hero-typewriter">
          <h1>Hi, I'm Michael.</h1>
          <p>A software engineer.</p>
        </div>
        <div className="icon-containers">
          <img
            className="contact"
            src={linkedin}
            onClick={() =>
              window.open("https://www.linkedin.com/in/vomichaelminh")
            }
            alt="alt"
          />
          <img
            className="contact"
            src={github}
            onClick={() => window.open("https://www.github.com/vomichaelminh")}
            alt="alt"
          />
          <img
            className="contact"
            src={email}
            onClick={() => window.open("mailto:vomm@uci.edu")}
            alt="alt"
          />
        </div>
      </h1>
    </div>
  );
};

export default HeroSection;
