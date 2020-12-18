import React from "react";
import Banner from "../Banner/Banner.js";
import CardList from "./CardList/CardList.js";
import "./Main.scss";

const Main = () => {
  return (
    <main className="main">
      <div className="main-container container">
        <div className="banner-container container p-0">
          <Banner />
        </div>
        <div className="main-sub-title">
          <h2 className="main-sub-title">למה אנחנו?</h2>
        </div>
        <CardList></CardList>
      </div>
    </main>
  );
};

export default Main;
