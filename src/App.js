import React from "react";
import Header from "./Header";
import Header2 from "./Header2";
import Sectioncha1 from "./Sectioncha1";
import Sectioncha2 from "./Sectioncha2";
import Sectioncha3 from "./Sectioncha3";
import Sectioncha4 from "./Sectioncha4";
import Footer from "./Footer";
import "./App.css";
import logonav from "./img/logonav.png";
import { RiEnglishInput } from "react-icons/ri";


function App() {

  return (
    <div>
        <nav className="sl-navbar dark" style={{ position: "fixed" }}>
          <div className="sl-navbar__container">
            <div className="sl-navbar__main-logo sl-navbar__main-logo--desktop">
              <img
                src={logonav}
                alt=""
                style={{ width: "150px", height: "60px" }}
              />
            </div>
            <div className="sl-navbar__main-logo sl-navbar__main-logo--mobile">
              <img src={logonav} alt="rasm1" style={{ width: "100px" }} />
            </div>
            <div className="sl-navbar__content">
              <ul className="sl-navbar__content-list">
                <li className="sl-navbar__content-list__item">
                  <a href="/">Home</a>
                </li>
                <li className="sl-navbar__content-list__item">
                  <a href="/">Browse Restaurant</a>
                </li>
                <li className="sl-navbar__content-list__item">
                  <a href="/">Login Sign Up</a>
                </li>
                <li className="sl-navbar__content-list__item">
                  <a href="/">
                    <RiEnglishInput />
                    English
                  </a>
                </li>
              </ul>
            </div>
            <Header2 />
          </div>
        </nav>
        <Header />
        <Sectioncha1 />
        <Sectioncha2 />
        <Sectioncha3 />
        <Sectioncha4 />
        <Footer />
    </div>
  );
}

export default App;
