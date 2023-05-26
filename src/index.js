//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

const Name = "Anirban";
ReactDOM.render(
  <div>
    <h1>My Things to study:</h1>
    <ul>
      <li>WebD</li>
      <li>DSA</li>
      <li>Cloud</li>
      <li>Aptitude</li>

      {/* including a JS constant in the HTML  */}

      <p>My name is {Name}</p>
    </ul>
  </div>,
  document.getElementById("root")
);
