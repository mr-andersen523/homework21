import React from "react";
import "./index.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 35, textAlign: "center", color:"#5a5a5a" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
