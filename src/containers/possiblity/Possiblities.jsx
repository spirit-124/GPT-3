import React from "react";
import possiblityImage from "../../assets/possibility.png";
import "./possiblities.css";

const Possiblities = () => {
  return (
    <div className="gpt3__possiblities section__padding" id="possiblity">
      <div className="gpt3__possiblities-image">
        <img src={possiblityImage} alt="" />
      </div>
      <div className="gpt3__possiblities-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possiblities;
