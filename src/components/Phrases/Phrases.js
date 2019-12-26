import React from "react";
import { Testimonial } from "./Testimonial";

export const Phrases = () => {
  return (
    <section id="testimonials">
      <div className="testimoniaContainer">
        <div className="overlay">
          <div className="holder960 clearfix">
            <div className="testimonialContent">
              <Testimonial author="Archimedes">
                The only way to learn it is to do it.
              </Testimonial>
              <Testimonial author="Steve Jobs">
                Being the richest man in the cemetery doesn't matter to me.
                Going to bed at night saying we've done something wonderful...
                that's what matters to me
              </Testimonial>
              <Testimonial author="Steve Jobs">
                That’s been one of my mantras — focus and simplicity. Simple can
                be harder than complex you have to work hard to get your
                thinking clean to make it simple
              </Testimonial>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
