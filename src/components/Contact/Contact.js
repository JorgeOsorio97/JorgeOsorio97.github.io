// React
import React, { useState } from "react";

// Components
import { SectionTitle } from "../Global/SectionTitle";
import { SubsectionTitle } from "../Global/SubsectionTitle";

export const Contact = () => {
  // * State
  const [loading, setloading] = useState(false);

  const sendContactForm = async () => {
    setloading(true);
    await fetch("google.com").then(data => {
      setloading(false);
    });
  };

  return (
    <section id="contact" className="clearfix section">
      <SectionTitle title="Contact">
        <p>
          Lorem ipsum dolor sit amet, consectetur selin du adipisicing elit
          <br /> sed do eiusmod. Ut enim ad minim veniam.
        </p>
      </SectionTitle>

      <div className="holder960 clearfix">
        <div className="contactContainer">
          <SubsectionTitle title="get in touch with me">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </SubsectionTitle>

          <div className="contactHolder top">
            <div className="contactForm clearfix">
              <form className="form clearfix" method="post">
                <div className="inputBox">
                  <label htmlFor="name">Nombre *</label>
                  <input type="text" id="name" name="name" />
                </div>

                <div className="inputBox">
                  <label htmlFor="email">Email *</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="inputBox">
                  <label htmlFor="message">Mensaje*</label>
                  <textarea name="m" id="message"></textarea>
                </div>

                <input
                  type="submit"
                  className="submit"
                  id="submit"
                  value="Send Message"
                  name="submit"
                />
              </form>

              <div id="success">
                <h2>
                  Tu mensaje a fue enviado, pronto me pondre en contacto
                  contigo. Saludos
                </h2>
              </div>
              <div id="error">
                <h2>
                  Lo siento hubo un problema, puedes mandar un correo a
                  jorge.valdez.osorio@hotmail.com
                </h2>
              </div>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
