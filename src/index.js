//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

const d = new Date();
const hour = d.getHours();

ReactDOM.render(
  <div>
    {hour >= 5 && hour <= 12 ? (
      <h1 className="heading" style={{ color: "red" }}>
        Good Morning
      </h1>
    ) : hour >= 12 && hour < 18 ? (
      <h1 className="heading" style={{ color: "green" }}>
        Good Afternoon
      </h1>
    ) : (
      <h1 className="heading" style={{ color: "blue" }}>
        Good Evening
      </h1>
    )}
  </div>,
  document.getElementById("root")
);
