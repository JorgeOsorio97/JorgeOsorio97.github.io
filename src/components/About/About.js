import React from "react";
import { Skill } from "./Skill";
import { Contact } from "./Contact";
import { SectionTitle } from "../Global/SectionTitle";

export const About = () => {
  return (
    <section id="about" className="clearfix ">
      <SectionTitle title="¿Quien soy?" icon="icon-umbrella">
      <p>Soy un estudiante, un programador web y un cientifico de datos.<br /> Especilaizado en Python y Java.</p>
      </SectionTitle>

      <div className="holder960 clearfix">
        <div className="innerTitle">
          <h1> Jorge Valdez</h1>
          <p>Cientifico de datos y Desarollador Web</p>
        </div>

        <div className="userProfile top nBottom">
          <div className="imgProfile">
            <img src="images/profile.jpg" width="200" height="200" alt="" />
          </div>

          <div className="getBtn">
            <div className="ico">
              <a href="#">
                <i className="icon-print-1"></i>
              </a>
            </div>
            <div className="ico">
              <a href="#">
                <i className="icon-download"></i>
              </a>
            </div>
            <h3>Conoce mi CV</h3>
          </div>

          <div className="followBtn">
            <div className="ico">
              <a href="https://www.facebook.com/george.okuro.5" className="fb">
                <i className="icon-facebook"></i>
              </a>
            </div>

            <div className="ico">
              <a className="tw" href="https://twitter.com/JorgeAValdezO">
                <i className="icon-twitter"></i>
              </a>
            </div>
            <div className="ico">
              <a
                className="tw"
                href="https://www.linkedin.com/in/jorge-aurelio-valdez-osorio-3a0432134/"
              >
                <i className="icon-linkedin"></i>
              </a>
            </div>
            <h3>Sigueme en</h3>
          </div>
        </div>

        <div id="skills" className="clearfix ">
          <div className="divider">
            <span>
              <i className="icon-star-filled"></i>
            </span>
          </div>

          <div className="innerTitle">
            <h1> Habilidades principales</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>

          <div className="skillsHolder clearfix top nBottom ">
            <div className="skills column">
              <Skill name="Python (Data Science/ Web)" percentage="95"></Skill>
              <Skill name="Javascript (React)" percentage="70"></Skill>
              <Skill name="Java (Android)" percentage="80"></Skill>
              <Skill name="R" percentage="60"></Skill>
            </div>

            <div className="textWidget column">
              <h1>Conóceme</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <br /> Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur commodo consequat
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="divider">
          <span>
            <i className="icon-star-filled"></i>
          </span>
        </div>

        <Contact />
      </div>
    </section>
  );
};
