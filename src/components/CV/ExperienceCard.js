import React from "react";

export const ExperienceCard = props => {
  return (
    <div className="em column">
      <div className="emIco">
        <i className={props.icon}></i>
      </div>
      <div className="emDesc">
        <h3>{props.title}</h3>
        <h6>{props.time}</h6>
        <p>{props.children}</p>
      </div>
    </div>
  );
};
