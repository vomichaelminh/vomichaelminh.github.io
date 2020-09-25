import React from "react";
import { Link } from "react-router-dom";

const CardItem = (props) => {
  return (
    <>
      <li className="cards__item">
        <Link
          className="cards__item__link"
          onClick={() => window.open(props.path)}
          target="_blank"
        >
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Project_Image"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <p className="cards__item__text">{props.title}</p>
            <p className="cards__item__text2">{props.text}</p>
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardItem;
