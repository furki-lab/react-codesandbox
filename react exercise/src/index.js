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
