import React from "react";
import food1 from "./img/food1.png";
import food2 from "./img/food2.png";
import food3 from "./img/food3.png";
import food4 from "./img/food4.png";
import food5 from "./img/food5.png";
import food6 from "./img/food6.png";
import food7 from "./img/food7.png";
import food8 from "./img/food8.png";
import food9 from "./img/food9.png";
import food10 from "./img/food10.png";
import food11 from "./img/food11.png";
import food12 from "./img/food12.png";
import food13 from "./img/food13.png";
import "./Sectioncha3.css";

function Section8() {
  return (
    <div>
      <section className="sl-home-propage">
        <div className="sl-home-propage__wrapper">
          <div className="sl-home-propage__wrapper__heading">
            <h1>Browse by cuisine</h1>
            <p>Choose from your favorite cuisine</p>
          </div>
          <div className="sl-home-propage__wrapper__benefits">
            <div className="sl-home-propage__wrapper__benefits__row">
              <div className="sl-home-propage__wrapper__benefits__row-item">
                <div className="sl-home-propage__wrapper__benefits__row-item__icon">
                  <img src={food1} alt="" style={{ width: "50px" }} />
                </div>
                <p>TURKISH</p>
              </div>
              <div className="sl-home-propage__wrapper__benefits__row-item">
                <div className="sl-home-propage__wrapper__benefits__row-item__icon">
                  <img src={food2} alt="" style={{ width: "50px" }} />
                </div>
                <p>DESERT</p>
              </div>
              <div className="sl-home-propage__wrapper__benefits__row-item">
                <div className="sl-home-propage__wrapper__benefits__row-item__icon">
                  <img src={food3} alt="" style={{ width: "50px" }} />
                </div>
                <p>CHICKEN</p>
              </div>
              <div className="sl-home-propage__wrapper__benefits__row-item">
                <div className="sl-home-propage__wrapper__benefits__row-item__icon">
                  <img src={food4} alt="" style={{ width: "50px" }} />
                </div>
                <p>ARABIC</p>
              </div>
              <div className="sl-home-propage__wrapper__benefits__row-item">
                <div className="sl-home-propage__wrapper__benefits__row-item__icon">
                  <img src={food5} alt="" style={{ width: "50px" }} />
                </div>
                <p>ORIENTAL</p>
              </div>
              <div className="sl-home-propage__wrapper__benefits__row-item">
                <div className="sl-home-propage__wrapper__benefits__row-item__icon">
                  <img src={food6} alt="" style={{ width: "50px" }} />
                </div>
                <p>PIZZA</p>
              </div>
              <div className="sl-home-propage__wrapper__benefits__row-item">
                <div className="sl-home-propage__wrapper__benefits__row-item__icon">
                  <img src={food7} alt="" style={{ width: "50px" }} />
                </div>
                <p>SHAWARMA</p>
              </div>
              <div className="sl-home-propage__wrapper__benefits__row-item">
                <div className="sl-home-propage__wrapper__benefits__row-item__icon">
                  <img src={food8} alt="" style={{ width: "50px" }} />
                </div>
                <p>BARBEQUE</p>
              </div>
              <div className="sl-home-propage__wrapper__benefits__row-item">
                <div className="sl-home-propage__wrapper__benefits__row-item__icon">
                  <img src={food9} alt="" style={{ width: "50px" }} />
                </div>
                <p>HEALTHY</p>
              </div>
              <div className="sl-home-propage__wrapper__benefits__row-item">
                <div className="sl-home-propage__wrapper__benefits__row-item__icon">
                  <img src={food10} alt="" style={{ width: "50px" }} />
                </div>
                <p>PERSIAN</p>
              </div>
              <div className="sl-home-propage__wrapper__benefits__row-item">
                <div className="sl-home-propage__wrapper__benefits__row-item__icon">
                  <img src={food11} alt="" style={{ width: "50px" }} />
                </div>
                <p>INDIAN</p>
              </div>
              <div className="sl-home-propage__wrapper__benefits__row-item">
                <div className="sl-home-propage__wrapper__benefits__row-item__icon">
                  <img src={food12} alt="" style={{ width: "50px" }} />
                </div>
                <p>SEAFOOD</p>
              </div>
              <div className="sl-home-propage__wrapper__benefits__row-item">
                <div className="sl-home-propage__wrapper__benefits__row-item__icon">
                  <img src={food13} alt="" style={{ width: "50px" }} />
                </div>
                <p>BURGERS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section8;
