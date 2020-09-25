import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Some Of My Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src=""
              text="Randomly picks a restuarant for you"
              label="React.js | Node.js | Express.js | MongoDB"
              path="https://github.com/vomichaelminh"
              title="Lets Eat!"
            />
            <CardItem
              src=""
              text="Null"
              label="React.js | Node.js | Express.js | MongoDB"
              path="https://github.com/vomichaelminh"
              title="Null"
            />
            <CardItem
              src=""
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
