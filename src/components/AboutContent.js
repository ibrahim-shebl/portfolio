import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import img1 from '../assets/react1.jpg'
import img2 from '../assets/react2.webp'
import React from "react";

const AboutContent = () => {
  return(
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>Im a React Front-End Developer. I create Responsive Secure Website For My Client </p>
        <Link to="/contact"><button className="btn">Contact</button></Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={img1} alt="image" className="img" />
          </div> 
          <div className="img-stack bottom">
            <img src={img2} alt="image" className="img" />
          </div> 
        </div>
      </div>
    </div>
  )
};

export default AboutContent;
