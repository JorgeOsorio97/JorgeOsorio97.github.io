import React from "react";

export const Contact = () => {
  return (
    <div class="infoContainer top nTop clearfix">
      <div class="innerTitle">
        <h1>Informacion de Contacto</h1>
        <p>¿Dónde encontrarme?</p>
      </div>

      <div class="infoHolder top">
        <div class="address">
          <i class="icon-location"></i>
          <div id="map"></div>
        </div>

        <div class="info">
          <ul>
            <li>
              <div class="ico">
                <i class="icon-mail"></i> 123-456-789
              </div>
              <p>Email: jorge.valdez.osorio@gmail.com </p>
            </li>
            <li>
              <div class="ico">
                <i class="icon-phone"></i>
              </div>
              <p>Tel : +52 55 3143 2955</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
