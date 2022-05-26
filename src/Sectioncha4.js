import React from "react";
import "./Sectioncha4.css";

function Section11() {
  return (
    <div>
      <section
        className="sl-home-sign-up2"
        style={{ background: "rgb(31, 30, 40)" }}
      >
        <p className="sl-home-sign-up2__title">Subscribe to our newsletter</p>
        <div className="sl-home-sign-up2__action-btn-wrapper">
          <input type="text"  placeholder="E-mail" style={{width:'350px', height:"40px", borderRadius:"10px", border:"none"}}/>
          <button
            className="sl-home-action-btn sl-home-action-btn--primary sl-home-sign-up2__action-btn-wrapper__btn"
            type="button"
          >
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}

export default Section11;
