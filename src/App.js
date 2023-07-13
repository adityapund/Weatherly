import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
          
      <div className="footer-info">
        <a href="https://www.linkedin.com/in/aditya-pund-80b347202">
          LinkedIN
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://twitter.com/adityapund_?t=daUw4OZTpjDYRjXc8GG5JQ&s=09">
          Aditya Pund
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;