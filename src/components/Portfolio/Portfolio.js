import React from "react";

import { SectionTitle } from "../Global/SectionTitle";
import { Project } from "./Project";

import turisfon from "../../assets/img/turisfon.png";

export const Portfolio = props => {
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
              <li className={Categories.data_science.type}>
                <a href="">{Categories.data_science.name}</a>
              </li>
              <li className={Categories.web.type}>
                <a href="">{Categories.web.name}</a>
              </li>
              <li className={Categories.mobile.type}>
                <a className="last" href="">
                  {Categories.mobile.name}
                </a>
              </li>
            </ul>
          </div>

          <div id="works" className="clearfix">
            <ul className="portfolio clearfix ">
              <Project
                title="Análisis jugadores FIFA19"
                category={Categories.data_science}
                image={turisfon}
              />
              <Project
                title="Muevetec"
                category={Categories.web}
                image={turisfon}
              />
              <Project
                title="Publifon App"
                category={Categories.mobile}
                image={turisfon}
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Categories = {
  data_science: {
    name: "Ciencia de Datos y Estadistica",
    type: "catDS"
  },
  web: {
    name: "Desarrollo Web",
    type: "catWeb"
  },
  mobile: {
    name: "Desarrollo Mobil",
    type: "catMobil"
  }
};
