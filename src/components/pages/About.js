import React from "react";
import "../../App.css";
import profile from "../../images/profile.jpg";
import { Button } from "../Button";
import "./About.css";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-img">
        <img src={profile} alt="profile" className="img" />
      </div>
      <div className="about-container">
        <h1>About Me</h1>
        <p className="text">
          Hello! Thank you for checking out my website portfolio. Currently I am
          an incoming fourth year Computer Science student graduating in
          December 2020. I enjoy building projects that allow me to develop my
          skills as a developer and create software which is easily used an
          accessible. I focus on FullStack development typically using React.js
          for the frontend and Node.js for the backend.
        </p>
        <div className="resume-button">
          <Button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1-6rJuIW4VjrrpAc1FpCEaCiwfcJWQCEs/view?usp=sharing"
              )
            }
          >
            Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

// <body>
//   <div class="about-section">
//     <div class="inner-container">
//       <h1>About Us</h1>
//       <p class="text">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit
//         ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus
//         eius dicta a voluptates sit deleniti autem error eos totam nisi neque
//         voluptates sit deleniti autem error eos totam nisi neque.
//       </p>
//       <div class="skills">
//         <span>Web Design</span>
//         <span>Photoshop & Illustrator</span>
//         <span>Coding</span>
//       </div>
//     </div>
//   </div>
// </body>;
export default About;
