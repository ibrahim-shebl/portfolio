import "./HeroImgStyles.css";
import heroImge from '../assets/intro-bg.jpg'
import React from "react";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return(
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={heroImge} alt="inteo-img" />
      </div>
      <div className="content">
        <p>Hi, I'm A Freelancer.</p>
        <h1>React Developer.</h1>
        <div>
          <Link to='/project' className="btn">Projects
          </Link>
          <Link to='/contact' className="btn-light">Contact
          </Link>
        </div>
      </div>
    </div>
  )
};

export default HeroImg;
