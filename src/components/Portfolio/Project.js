// React
import React, { useState } from "react";
import PropTypes from 'prop-types'

// Components
import { ModalProject } from "./ModalProject";

// Models
import { ProjectModel } from "../../models/project.model";


export const Project = (props) => {
  // * State
  const [showModal, setshowModal] = useState(false);

  const project = props.project;

  const showProject = () => {
    setshowModal(true);
  };
  const hideProject = () => {
    setshowModal(false);
  };

  return (
    <React.Fragment>
      <li data-id="id-1" data-type={project.category.type} className="item">
        <div className="browserBar">
          <span className="browserDot"></span>
          <span className="browserDot"></span>
          <span className="browserDot"></span>
        </div>
        <div className="folioImg">
          <img src={project.image} alt={project.alt} />
        </div>

        <div className="workDesc">
          <h3>
            {project.title}
            <br />
            <span>{project.category.name}</span>
          </h3>
          <button onClick={showProject}>
            <i className="icon-search"></i>
          </button>
        </div>
      </li>
      <ModalProject open={showModal} onClose={hideProject} />
    </React.Fragment>
  );
};

Project.propTypes = {
  project: PropTypes.instanceOf(ProjectModel)
}