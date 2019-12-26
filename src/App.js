import React from "react";
import "./App.css";

import { Header } from "./components/Header/Header";
import { Teaser } from "./components/Teaser/Teaser";
import { About } from "./components/About/About";
import { CV } from "./components/CV/CV";
import { Phrases } from "./components/Phrases/Phrases";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Teaser></Teaser>
      <About></About>
      <CV></CV>
      <Phrases></Phrases>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
