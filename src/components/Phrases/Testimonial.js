import React from "react";

export const Testimonial = props => {
  return (
    <div class="testi ">
      <blockquote>{props.children}</blockquote>

      <div class="testiProfile">
        <div class="icoQuote">
          <i class="icon-quote-right"></i>
        </div>
        <div class="nameProfile">
          <h3>{props.author}</h3>
        </div>
      </div>
    </div>
  );
};
