import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import studyPlannerLogo from "../images/studyplanner.jpg";
import letsEatLogo from "../images/letsEat.jpg";
import websiteLogo from "../images/website.png";

function Cards() {
  return (
    <div className="cards">
      <h1>Some Of My Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={letsEatLogo}
              text="Randomly picks a restuarant for you so you don't have to go through all of that deciding"
              label="React.js | Node.js | Express.js | MongoDB"
              path="https://github.com/vomichaelminh"
              title="Lets Eat!"
            />
            <CardItem
              src={studyPlannerLogo}
              text="Study planner designed to help create efficient study sessions"
              label="React.js | Node.js | Express.js | MongoDB"
              path="https://github.com/vomichaelminh"
              title="StudyPlanner"
            />
            <CardItem
              src={websiteLogo}
              text="Personal Website to showcase my experiences and who I am"
              label="React.js | HTML | CSS"
              path="https://github.com/vomichaelminh"
              title="Portfolio"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
