import React from "react";
import "./banner.css";

function Banner() {
  return (
    <div className="Banner">
      <div className="BannerContent">
      <div className="bannertext">
      <h1>I build things for the web</h1> 
      <p>
          Hi, I am Edesiri. I am a front-end developer. <br /> I design, build and
          maintain responsive websites. 
        </p>
        <button>View my Projects</button>
      </div>
        <img src="/images/me.png" alt="" srcset="" />
      </div>
      </div>

    
  );
}

export default Banner;
