import React from "react";
import "./youtube.css";
import YoutubeVIdeo from "./YoutubeVideo/YoutubeVIdeo";
import YoutubeCarusel from "./YoutubeCarusel/YoutubeCarusel";
import YoutubevideoModal from "./YoutubevideoModal/YoutubevideoModal";
const Youtube = () => {
  return (
    <>
      <YoutubevideoModal />

      <section className="youtube-section">
        <div className="container">
          <div className="youtube-section__wrapper">
            <h2>Откройте для себя вековые традиции</h2>
            <h3>
              И наслаждайтесь процессом пивоварения, ведь с Баварией - это
              просто
            </h3>
            <YoutubeVIdeo />
            <YoutubeCarusel />
          </div>
        </div>
      </section>
    </>
  );
};

export default Youtube;
