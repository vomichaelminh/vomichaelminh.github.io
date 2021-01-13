import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
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
              text="Recipe app which helps you keep track of recipes you like and will make."
              label="React.js | Node.js | Express.js | MongoDB"
              path="https://github.com/vomichaelminh/RecipeGo"
              title="RecipeGo"
            />
            <CardItem
              text="Drama tracker, which allows you to keep log of all of the dramas you have watched."
              label="React.js | Node.js | Express.js | MongoDB"
              path="https://github.com/vomichaelminh/DramaMi"
              title="DramaMi"
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
