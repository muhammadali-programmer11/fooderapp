import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import card1img from "./img/card1img.png";
import card2img from "./img/card2img.png";
import "./Sectioncha2.css";

function Section4() {
  return (
    <div>
      <section className="sl-home-perfect-platform">
        <p className="sl-home-perfect-platform__title">Featured Restaurants</p>
        <div className="sl-home-perfect-platform__items-wrapper">
          <div className="sl-home-perfect-platform-item">
            <img
              src={card1img}
              className="sl-home-perfect-platform-item__icon"
              alt="sl-home-perfect-img"
            />
            <div className="sl-home-perfect-platform-item__name">
              Chinese Lezzet <br />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <span className="sl-home-perfect-platform-item__description">
              Dessert, Chicken , Barbeque Chinese Lezzet ,Kaliland Famagusta
              North Cyprus 99450
            </span>
          </div>
          <div className="sl-home-perfect-platform-item">
            <img
              src={card2img}
              className="sl-home-perfect-platform-item__icon"
              alt="sl-home-perfect-img"
            />
            <div className="sl-home-perfect-platform-item__name">
              Yoland <br />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <span className="sl-home-perfect-platform-item__description">
              Pizza, Chicken , Shawarma, Arabic, Burgers Sevecen Sokak,
              Gazimağusa Famagusta North Cyprus 9
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Section4;
