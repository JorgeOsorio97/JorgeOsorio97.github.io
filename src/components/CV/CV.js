import React from "react";

import { SectionTitle } from "../Global/SectionTitle";
import { SubsectionTitle } from "../Global/SubsectionTitle";
import { CardRow } from "../Global/CardRow";
import { ExperienceCard } from "./ExperienceCard";

export const CV = () => {
  return (
    <section id="resume" class="clearfix section">
      <SectionTitle title="resume" icon="icon-docs">
        <p>
          Lorem ipsum dolor sit amet, consectetur selin du adipisicing elit sed
          do eiusmod. Ut enim ad minim veniam.
        </p>
      </SectionTitle>

      <div class="holder960 clearfix">
        <div class="resumeContainer">
          <SubsectionTitle title=" my Employment">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </SubsectionTitle>

          <div class="emHolder top clearfix">
            <CardRow>
              <ExperienceCard
                title="WebDeveloper - MutationMedia"
                time="2005-2013"
                icon="icon-briefcase"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </ExperienceCard>
              <ExperienceCard
                title="WebDeveloper - MutationMedia"
                time="2005-2013"
                icon="icon-briefcase"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </ExperienceCard>
            </CardRow>
          </div>

          <div class="divider">
            <span>
              <i class="icon-star-filled"></i>
            </span>
          </div>

          <div class="innerTitle">
            <h1> my education</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>

          <div class="edHolder top clearfix">
            <CardRow>
              <ExperienceCard
                title="Master Degree – Mutation Media"
                time="2005-2013"
                icon="icon-graduation-cap"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </ExperienceCard>
              <ExperienceCard
                title="Master Degree – Mutation Media"
                time="2005-2013"
                icon="icon-graduation-cap"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </ExperienceCard>
            </CardRow>
          </div>
        </div>
      </div>

      <div class="cta">
        <p>
          Do you have a project, ideas and you want to get started ?<br /> Don’t
          hesitate feel free to get in <a href="#contact">touch with me</a>.
        </p>
      </div>
    </section>
  );
};
