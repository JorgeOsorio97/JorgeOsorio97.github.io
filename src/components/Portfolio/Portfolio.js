import React from "react";

import { SectionTitle } from "../Global/SectionTitle";
import { Project } from "./Project";

import turisfon from "../../assets/img/turisfon.png";

export const Portfolio = props => {
  return (
    <section id="portfolio" class="clearfix section">
      <SectionTitle title="portfolio" icon="icon-camera">
        <p>
          Lorem ipsum dolor sit amet, consectetur selin du adipisicing elit
          <br /> sed do eiusmod. Ut enim ad minim veniam.
        </p>
      </SectionTitle>

      <div class="holder960 clearfix">
        <div class="portfolioContainer">
          <div class="innerTitle">
            <h1> check out my works</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>

          <div class="divider">
            <span>
              <i class="icon-star-filled"></i>
            </span>
          </div>

          <div class="filterNav">
            <ul id="category" class="filter">
              <li class="all current">
                <a href="">All</a>
              </li>
              <li class={Categories.data_science.type}>
                <a href="">{Categories.data_science.name}</a>
              </li>
              <li class={Categories.web.type}>
                <a href="">{Categories.web.name}</a>
              </li>
              <li class={Categories.mobile.type}>
                <a class="last" href="">
                  {Categories.mobile.name}
                </a>
              </li>
            </ul>
          </div>

          <div id="works" class="clearfix">
            <ul class="portfolio clearfix ">
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
