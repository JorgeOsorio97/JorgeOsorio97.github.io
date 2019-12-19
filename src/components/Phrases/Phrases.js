import React from "react";
import { Testimonial } from "./Testimonial";

export const Phrases = () => {
  return (
    <section id="testimonials">
      <div class="testimoniaContainer">
        <div class="overlay">
          <div class="holder960 clearfix">
            <div class="testimonialContent">
              <Testimonial author="Archimedes">
                The only way to learn it is to do it.
              </Testimonial>
              <div class="testi ">
                <blockquote>
                  Being the richest man in the cemetery doesn't matter to me.
                  Going to bed at night saying we've done something wonderful...
                  that's what matters to me{" "}
                </blockquote>

                <div class="testiProfile">
                  <div class="icoQuote">
                    <i class="icon-quote-right"></i>
                  </div>
                  <div class="nameProfile">
                    <h3>Steve Jobs</h3>
                  </div>
                </div>
              </div>

              <div class="testi">
                <blockquote>
                  That’s been one of my mantras — focus and simplicity. Simple
                  can be harder than complex you have to work hard to get your
                  thinking clean to make it simple
                </blockquote>

                <div class="testiProfile">
                  <div class="icoQuote">
                    <i class="icon-quote-right"></i>
                  </div>
                  <div class="nameProfile">
                    <h3>Steve Jobs</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
