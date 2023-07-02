 
import "./WorkCardStyles.css";
import React from "react";
import WorkCard from "./WorkCard";
import ProjectWorkData from "./WorkCradData";

const Work = () => {
  return(
    <div className="work-container">
       <h1 className="project-heading">Projects</h1>
       <div className="project-container">
        {ProjectWorkData.map((val,ind)=>{
          return(
            <WorkCard 
              key = {ind}
              img = {val.img}
              heading = {val.heading}
              text = {val.text}
              url = {val.url}
            />
          )
        })}
       </div>
    </div >
  )
};

export default Work;
