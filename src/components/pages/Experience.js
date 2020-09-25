import React from "react";
import "../../App.css";
import "./Experience.css";
import bluejesticLogo from "../../images/bluejestic.png";
import uciLogo from "../../images/uci_ics.jpg";
const Experience = () => {
  return (
    <div id="experience" className="resume container-fluid">
      <p className="about-me-header">My Experiences So Far</p>
      <div className="experience-container">
        <div className="experience-card row">
          <div className="experience-pic col-sm-2">
            <a href="/" target="_blank">
              <img
                className="exp-pic"
                src={bluejesticLogo}
                alt="bluejestic logo"
              />
            </a>
          </div>
          <div className="experience-main col-sm-10">
            <div className="exp-header">
              <div className="exp-title">
                <p>Bluejestic Inc</p>
                <p>Software Engineer Internship</p>
              </div>
              <div className="exp-info">
                <p>Irvine, CA</p>
                <p>June 2020 - September 2020</p>
              </div>
            </div>
            <div className="exp-body">
              <ul className="exp-body-list">
                <li className="exp-body-point">
                  Increased front-end performance and created pull requests in
                  Git concerning front-end React & Redux fixes to fit the
                  company’s CORE design requirements.
                </li>
                <li className="exp-body-point">
                  Developed React higher-order components for authentication and
                  internationalization, improved software usability by
                  integrating highly efficient user interfaces.
                </li>
                <li className="exp-body-point">
                  Utilized Material UI to document a library for reusable React
                  components.
                </li>
              </ul>
              <div className="tag-container">
                <div className="tag">React.js</div>
                <div className="tag">HTML</div>
                <div className="tag">CSS</div>
                <div className="tag">MongoDB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="experience-container">
        <div className="experience-card row">
          <div className="experience-pic col-sm-2">
            <a href="/" target="_blank">
              <img className="exp-pic" src={uciLogo} alt="bluejestic logo" />
            </a>
          </div>
          <div className="experience-main col-sm-10">
            <div className="exp-header">
              <div className="exp-title">
                <p>UC Irvine School of Information and Computer Sciences</p>
                <p>Python Lab Instructor</p>
              </div>
              <div className="exp-info">
                <p>Irvine, CA</p>
                <p>September 2019 - January 2020</p>
              </div>
            </div>
            <div className="exp-body">
              <ul className="exp-body-list">
                <li className="exp-body-point">
                  Tutored over 30 students and assisted in constructing and
                  developing programs which utilized various data structures and
                  algorithms such as linked lists, trees, graphs, hash tables
                  and breadth/depth first traversals.
                </li>
                <li className="exp-body-point">
                  Volunteered as a peer facilitator for groups of 3-5
                  undergraduate students, arranged and conducted team
                  assignments.
                </li>
              </ul>
              <div className="tag-container">
                <div className="tag">Python</div>
                <div className="tag">HTML</div>
                <div className="tag">CSS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
