import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import linkedin from "../images/linkedin.png";
import github from "../images/github.svg";
import email from "../images/email-icon.png";

const HeroSection = () => {
  return (
    <div className="cover">
      <div className="hero-container">
        <div className="hero-typewriter">
          <h1>Hi, I'm Michael. A Software Engineer.</h1>
        </div>
        <h1 className="contact-icons">
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
            onClick={() => window.open("mailto:michaelminhvo1@gmail.com")}
            alt="alt"
          />
        </h1>

        <div className="hero-btns">
          {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
