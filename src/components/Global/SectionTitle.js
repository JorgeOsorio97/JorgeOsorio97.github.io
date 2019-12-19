import React from "react";

export const SectionTitle = (props) => {
  return (
    <div class="secTitle">
      <h1>
        <i class={props.icon}></i>/ {props.title}
      </h1>
      {props.children}
    </div>
  );
};
