import React from "react";

export const Header = (props) => {
  return (
    <header id="header" className="clearfix">
      <div className=" holder960">
        <div className="mobileBtn">
          <i className="icon-menu"></i>
        </div>

        <nav id="mainNav">
          <ul>
            <li>
              <a href="#wrapper">Inicio</a>
            </li>
            <li>
              <a href="#about">¿Quien soy?</a>
            </li>
            <li>
              <a href="#resume">Curriculum</a>
            </li>
            <li>
              <a href="#portfolio">Portafolio</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
