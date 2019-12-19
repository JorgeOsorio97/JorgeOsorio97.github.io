import React from "react";
import Modal from "@material-ui/core/Modal";

export const Project = props => {
  const showProject = () => {};
  return (
    <React.Fragment>
      <li data-id="id-1" data-type={props.category.type} class="item  ">
        <div class="browserBar">
          <span class="browserDot"></span>
          <span class="browserDot"></span>
          <span class="browserDot"></span>
        </div>
        <div class="folioImg">
          <img src={props.image} alt={props.alt} />
        </div>

        <div class="workDesc">
          <h3>
            {props.title}
            <br />
            <span>{props.category.name}</span>
          </h3>
          <a class="prev" href="images/portfolioImages/workLarge.jpg">
            <i class="icon-search"></i>
          </a>
        </div>
      </li>
      <Modal></Modal>
    </React.Fragment>
  );
};
