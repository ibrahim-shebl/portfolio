import "./FooterStyles.css";
import {FaHome,FaMailBulk,FaPhone,FaLinkedin,FaFacebook,FaTwitter} from "react-icons/fa"
import React from "react";

const Footer = () => {
  return(
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size = {20} style={{color: "#fff" , marginRight:"2rem"}} />
            <div>
              <p>Shbeen El Koom</p>
              <p>Menoufia</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size = {20} style={{color: "#fff" , marginRight:"2rem"}} />
            01025946540</h4>
          </div>
          <div className="email">
            <h4><FaMailBulk size = {20} style={{color: "#fff" , marginRight:"2rem"}} />
            hema01025946540@gmail.com</h4>
          </div>


        </div>
        <div className="right">
          <h4>About The Projects.</h4>
          <p>I'm A Ibrahim Shebl :<br/>A React Developer, I Made 
            projects using Html And CSS, And I made projects using Bootstrap, projects using React, and also projects with javascript</p>
          <div className="social-icons">
            <FaFacebook size = {30} style={{color: "#fff" , marginRight:"1rem"}} />
            <FaLinkedin size = {30} style={{color: "#fff" , marginRight:"1rem"}} />
            <FaTwitter size = {30} style={{color: "#fff" , marginRight:"1rem"}} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;
