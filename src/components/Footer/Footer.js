import React from "react";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="holder960 clearfix">
        <div className="ftTop clearfix">
          <div className="feed">
            <div className="feedIco">
              <i className="icon-twitter"></i>
            </div>
            <div className="tweet">
              <h3>@JorgeAValdezO</h3>
              <a
                className="twitter-timeline"
                data-height="250"
                href="https://twitter.com/JorgeAValdezO"
              >
                Tweets by TwitterDev
              </a>{" "}
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charSet="utf-8"
              ></script>
            </div>
          </div>
          <div className="share ">
            <ul className="socialsFooter">
              <li>
                <a href="">
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="icon-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bottom clearfix">
        <div className="holder960 clearfix">
          <p>
            &copy; 2013. <span>Confidence</span> All Rights Reserved.
          </p>
          <ul>
            <li>
              <a href="">Hire Me</a>
            </li>
            <li>
              <a href="">Print My CV</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
