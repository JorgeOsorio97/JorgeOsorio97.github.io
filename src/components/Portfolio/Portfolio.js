// React
import React from "react";

// Components
import { SectionTitle } from "../Global/SectionTitle";
import { Project } from "./Project";


// Data
import { categories, projects } from "../../data";

export const Portfolio = (props) => {

  const projectsArr = projects.map((val, i)=>{
    console.log(val);
    
    return <Project project={val} key={i}></Project>
  })


  return (
    <section id="portfolio" className="clearfix section">
      <SectionTitle title="portfolio" icon="icon-camera">
        <p>
          Lorem ipsum dolor sit amet, consectetur selin du adipisicing elit
          <br /> sed do eiusmod. Ut enim ad minim veniam.
        </p>
      </SectionTitle>

      <div className="holder960 clearfix">
        <div className="portfolioContainer">
          <div className="innerTitle">
            <h1> check out my works</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>

          <div className="divider">
            <span>
              <i className="icon-star-filled"></i>
            </span>
          </div>

          <div className="filterNav">
            <ul id="category" className="filter">
              <li className="all current">
                <a href="">All</a>
              </li>
              <li className={categories.data_science.type}>
                <a href="">{categories.data_science.name}</a>
              </li>
              <li className={categories.web.type}>
                <a href="">{categories.web.name}</a>
              </li>
              <li className={categories.mobile.type}>
                <a className="last" href="">
                  {categories.mobile.name}
                </a>
              </li>
            </ul>
          </div>

          <div id="works" className="clearfix">
            <ul className="portfolio clearfix ">

              {projectsArr}

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
