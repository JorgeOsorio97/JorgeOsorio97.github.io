import React from "react";

export const ExperienceCard = props => {
  return (
    <div class="em column">
      <div class="emIco">
        <i class={props.icon}></i>
      </div>
      <div class="emDesc">
        <h3>WebDesigner – Mutation Media </h3>
        <h6>2005-2013</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </div>
    </div>
  );
};
