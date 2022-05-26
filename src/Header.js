import React from "react";
import "./Header.css";
function Header() {
  return (
    <div>
      <section className="sl-home-header">
        <div className="sl-home-header__title-wrapper">
          <h1 className="sl-home-header__title">
            Order food from local restaurant
          </h1>
          <div className="sl-home-header__title-icon sl-home-header__title-icon--right"></div>
        </div>
        <div className="sl-home-header__info">
          <p>Food delivery service that’s easy & convenient!</p>
        </div>
        <div className="sl-home-header__action">
          <div className="sl-home-social-login">
            <div className="sl-social-login__container">
              <div className="sl-login-social-login" sl-test-data="baseElement">
                <div className="sl-login-social-login__item">
                  <input type="text" placeholder="State" />
                </div>
                <div
                  className="sl-login-social-login__item"
                  sl-test-data="appleButtonElement"
                >
                  <input type="text" placeholder="City" />
                </div>
                <div className="sl-login-social-login__item">
                  <button
                    type="button"
                    className="sl-login-social-login__item--facebook sl-login-social-login__item__social-button"
                  >
                    <span>SHOW RESTAURANTS</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
