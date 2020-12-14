import React from "react";
import MainCard from "./Card/MainCard.js";
import image1 from "../../../resources/images/logo.png";
import "./CardList.scss";

const CardList = () => {
  return (
    <div className="cards-container">
      <MainCard title="title1" text="absafasf" image={image1}></MainCard>
      <MainCard title="title2" text="aasfa" image={image1}></MainCard>
      <MainCard title="title3" text="aasfaasfasfaf" image={image1}></MainCard>
    </div>
  );
};

export default CardList;
