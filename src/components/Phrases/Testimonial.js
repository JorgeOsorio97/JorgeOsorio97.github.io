import React from "react";

export const Testimonial = props => {
  return (
    <div className="testi ">
      <blockquote>{props.children}</blockquote>

      <div className="testiProfile">
        <div className="icoQuote">
          <i className="icon-quote-right"></i>
        </div>
        <div className="nameProfile">
          <h3>{props.author}</h3>
        </div>
      </div>
    </div>
  );
};
