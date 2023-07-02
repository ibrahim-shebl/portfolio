import React from "react";
import { NavLink } from "react-router-dom";
import "./WorkCardStyles.css";
const WorkCard = (props) => {
  return(
          <div className="project-card">
            <img src={props.img} alt="image" />
            <h2 className="project-title">{props.heading}</h2>
            <div className="pro-details">
              <p>{props.text}</p>
              <div className="pro-btn">
                <NavLink to={props.url} className="btn">View</NavLink>
                <NavLink to="" className="btn">Source</NavLink>
              </div>
            </div>
          </div>
  )
};

export default WorkCard;
