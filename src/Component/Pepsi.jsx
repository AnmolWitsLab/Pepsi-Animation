import React from "react";
import "./Pepsi.css";

function Coke() {
  return (
    <body>
      <div className="card">
        <div className="circle"></div>
        <div className="content">
          <h2>Pepsi Cola</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            excepturi nulla ex dolorum facere, expedita laboriosam ab assumenda!
          </p>
          <a href="https://www.pepsi.com">Buy Now</a>
        </div>
        <img src="./images/pepsi.png" alt="pepsi" />
      </div>
    </body>
  );
}

export default Coke;
