import React from "react";

export const SectionTitle = (props) => {
  return (
    <div className="secTitle">
      <h1>
        <i className={props.icon}></i>/ {props.title}
      </h1>
      {props.children}
    </div>
  );
};
