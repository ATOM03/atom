import React from "react";
import "./InfoBar.css";
const InfoBar = ({ room }) => (
  <div className="OuterInfoBox">
    <div className="leftInforBox">
      <h3>{room}</h3>
    </div>
    <div className="rightInfoBox">
      <a href="/" className="Back">
        Close[X]
      </a>
    </div>
  </div>
);

export default InfoBar;
