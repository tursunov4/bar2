import React from "react";
import P1 from "../../../assets/Images/png/P1.png";
import P2 from "../../../assets/Images/png/P2.png";
import P3 from "../../../assets/Images/png/P3.png";
import P4 from "../../../assets/Images/png/P4.png";
import P5 from "../../../assets/Images/png/P5.png";
import P6 from "../../../assets/Images/png/P6.png";
import P7 from "../../../assets/Images/png/P7.png";
import P8 from "../../../assets/Images/png/P8.png";
import P9 from "../../../assets/Images/png/P9.png";
import ResponsiveCard from "./ResponsiveCard";

import "./style.css";

const Images = () => {
  return (
    <>
      <div className="images">
        <h1>Реальные фото пивоварни BAVARIA</h1>
        <div class="pokupka__images">
          <div id="item-0">
            <img src={P1} alt="rasm" />
          </div>
          <div id="item-1">
            <img src={P5} alt="rasm" />
          </div>
          <div id="item-2">
            <img src={P6} alt="rasm" />
          </div>
          <div id="item-3">
            <img src={P2} alt="rasm" />
          </div>
          <div id="item-4">
            <img src={P3} alt="rasm" />
          </div>
          <div id="item-5">
            <img src={P7} alt="rasm" />
          </div>
          <div id="item-6">
            <img src={P4} alt="rasm" />
          </div>
          <div id="item-7">
            <img src={P8} alt="rasm" />
          </div>
          <div id="item-8">
            <img src={P9} alt="rasm" />
          </div>
        </div>
      </div>

      <ResponsiveCard />
    </>
  );
};

export default Images;
