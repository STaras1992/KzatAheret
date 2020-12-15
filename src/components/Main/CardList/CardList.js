import React from "react";
import MainCard from "./Card/MainCard.js";
import image1 from "../../../resources/images/cards/card2.png";
import image2 from "../../../resources/images/cards/card6.png";
import image3 from "../../../resources/images/cards/card5.png";
import "./CardList.scss";

const CardList = () => {
  return (
    <div className="cards-container">
      {/* <img src={image1}></img> */}
      <MainCard
        title="שירות"
        text="משלוחים עד בית הלקוח"
        image={image1}
      ></MainCard>
      <MainCard
        title="איכות"
        text="כל הרכיבים באיכות הכי גבוהה"
        image={image2}
      ></MainCard>
      <MainCard
        title="יחס"
        text="יחס חם ומכבד לכל לקוח"
        image={image3}
      ></MainCard>
    </div>
  );
};

export default CardList;
