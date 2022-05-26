import React from "react";
import "./Sectioncha1.css";
import step1 from "./img/step1.png";
import step2 from "./img/step2.png";
import step3 from "./img/step3.png";
import step4 from "./img/step4.png";

function Slider1() {
  return (
    <div>
      <section className="sl-home-courses">
        <div className="sl-home-courses__container">
          <div className="sec1-title">
            <h1>How Fooder works</h1>
            <p>Get your favourite food in 4 simple steps</p>
          </div>
          <div className="sl-horizontal" sl-test-data="cmpHorizontalScrollList">
            <div className="sl-horizontal__item">
              <div className="sl-home-course-item">
                <div className="sl-home-course-item__image-wrapper">
                  <img
                    src={step1}
                    className="sl-home-course-item__image"
                    alt="course"
                  />
                </div>
                <p className="sl-home-course-item__name">
                  <button>Search</button> <br />
                  Find all restaurants available near you
                </p>
              </div>
            </div>
            <div className="sl-horizontal__item">
              <div className="sl-home-course-item">
                <div className="sl-home-course-item__image-wrapper">
                  <img
                    src={step2}
                    className="sl-home-course-item__image"
                    alt="course"
                  />
                </div>
                <p className="sl-home-course-item__name">
                  <button>Search</button> <br />
                  Browse hundreds of menus to find the food you like
                </p>
              </div>
            </div>
            <div className="sl-horizontal__item">
              <div className="sl-home-course-item">
                <div className="sl-home-course-item__image-wrapper">
                  <img
                    src={step3}
                    className="sl-home-course-item__image"
                    alt="course"
                  />
                </div>
                <p className="sl-home-course-item__name">
                  <button>Search</button> <br />
                  It's quick, secure and easy
                </p>
              </div>
            </div>
            <div className="sl-horizontal__item">
              <div className="sl-home-course-item">
                <div className="sl-home-course-item__image-wrapper">
                  <img
                    src={step4}
                    className="sl-home-course-item__image"
                    alt="course"
                  />
                </div>
                <p className="sl-home-course-item__name">
                  <button>Search</button> <br />
                  Food is prepared & delivered to your door
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Slider1;
