import React from "react";

export const Contact = () => {
  return (
    <div className="infoContainer top nTop clearfix">
      <div className="innerTitle">
        <h1>Informacion de Contacto</h1>
        <p>¿Dónde encontrarme?</p>
      </div>

      <div className="infoHolder top">
        <div className="address">
          <i className="icon-location"></i>
          <div id="map"></div>
        </div>

        <div className="info">
          <ul>
            <li>
              <div className="ico">
                <i className="icon-mail"></i> 123-456-789
              </div>
              <p>Email: jorge.valdez.osorio@gmail.com </p>
            </li>
            <li>
              <div className="ico">
                <i className="icon-phone"></i>
              </div>
              <p>Tel : +52 55 3143 2955</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
