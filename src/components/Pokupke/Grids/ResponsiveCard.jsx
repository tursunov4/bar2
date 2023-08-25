import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import P1 from "../../../assets/Images/png/Pokupka responsive images/P1.png";
import P2 from "../../../assets/Images/png/Pokupka responsive images/P2.png";
import P3 from "../../../assets/Images/png/Pokupka responsive images/P3.png";
import P4 from "../../../assets/Images/png/Pokupka responsive images/P4.png";
import P5 from "../../../assets/Images/png/Pokupka responsive images/P5.png";
import P6 from "../../../assets/Images/png/Pokupka responsive images/P6.png";
import P7 from "../../../assets/Images/png/Pokupka responsive images/P7.png";
import P8 from "../../../assets/Images/png/Pokupka responsive images/P8.png";
import P9 from "../../../assets/Images/png/Pokupka responsive images/P9.png";
import "./style.css";

const ResponsiveCard = () => {
  return (
    <div className="responsive">
      <h1>Реальные фото пивоварни BAVARIA</h1>
      <div className="responsive__card">
        {/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={P1} alt="Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={P2} alt="Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={P5} alt="Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={P4} alt="Image" />
          </SwiperSlide>
        </Swiper> */}

        <img src={P1} alt="Image" />
        <img src={P2} alt="Image" />
        <img src={P3} alt="Image" />
        <img src={P4} alt="Image" />
        <img src={P5} alt="Image" />
        <img src={P6} alt="Image" />
        <img src={P7} alt="Image" />
        <img src={P8} alt="Image" />
        <img src={P9} alt="Image" />
      </div>
    </div>
  );
};

export default ResponsiveCard;
