import React, {useState} from "react";
import Modal from "@material-ui/core/Modal";


export const Project = props => {
  

  // * State
  const [showModal, setshowModal] = useState(false);

  const showProject = () => {
    setshowModal(true);
  };
  const hideProject = () => {
    setshowModal(false);
  }


  return (
    <React.Fragment>
      <li data-id="id-1" data-type={props.category.type} className="item  ">
        <div className="browserBar">
          <span className="browserDot"></span>
          <span className="browserDot"></span>
          <span className="browserDot"></span>
        </div>
        <div className="folioImg">
          <img src={props.image} alt={props.alt} />
        </div>

        <div className="workDesc">
          <h3>
            {props.title}
            <br />
            <span>{props.category.name}</span>
          </h3>
          <button onClick={showProject}>
            <i className="icon-search"></i>
          </button>
        </div>
      </li>
      <Modal
        open={showModal}
        onClose={hideProject}
      >
        <p>HOLO</p>
      </Modal>
    </React.Fragment>
  );
};
