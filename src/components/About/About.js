import React from "react";
import { Skill } from "./Skill";
import { Contact } from "./Contact";
import { Intro } from "./Intro";
import { SectionTitle } from "../Global/SectionTitle";

export const About = () => {
  return (
    <section id="about" class="clearfix ">
      <SectionTitle title="¿Quien soy?" icon="icon-umbrella">
      <p>Soy un estudiante, un programador web y un cientifico de datos.<br /> Especilaizado en Python y Java.</p>
      </SectionTitle>

      <div class="holder960 clearfix">
        <div class="innerTitle">
          <h1> Jorge Valdez</h1>
          <p>Cientifico de datos y Desarollador Web</p>
        </div>

        <div class="userProfile top nBottom">
          <div class="imgProfile">
            <img src="images/profile.jpg" width="200" height="200" alt="" />
          </div>

          <div class="getBtn">
            <div class="ico">
              <a href="#">
                <i class="icon-print-1"></i>
              </a>
            </div>
            <div class="ico">
              <a href="#">
                <i class="icon-download"></i>
              </a>
            </div>
            <h3>Conoce mi CV</h3>
          </div>

          <div class="followBtn">
            <div class="ico">
              <a href="https://www.facebook.com/george.okuro.5" class="fb">
                <i class="icon-facebook"></i>
              </a>
            </div>

            <div class="ico">
              <a class="tw" href="https://twitter.com/JorgeAValdezO">
                <i class="icon-twitter"></i>
              </a>
            </div>
            <div class="ico">
              <a
                class="tw"
                href="https://www.linkedin.com/in/jorge-aurelio-valdez-osorio-3a0432134/"
              >
                <i class="icon-linkedin"></i>
              </a>
            </div>
            <h3>Sigueme en</h3>
          </div>
        </div>

        <div id="skills" class="clearfix ">
          <div class="divider">
            <span>
              <i class="icon-star-filled"></i>
            </span>
          </div>

          <div class="innerTitle">
            <h1> Habilidades principales</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>

          <div class="skillsHolder clearfix top nBottom ">
            <div class="skills column">
              <Skill name="Python (Data Science/ Web)" percentage="95"></Skill>
              <Skill name="Javascript (React)" percentage="70"></Skill>
              <Skill name="Java (Android)" percentage="80"></Skill>
              <Skill name="R" percentage="60"></Skill>
            </div>

            <div class="textWidget column">
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

        <div class="divider">
          <span>
            <i class="icon-star-filled"></i>
          </span>
        </div>

        <Contact />
      </div>
    </section>
  );
};
