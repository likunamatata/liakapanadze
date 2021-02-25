import React from "react";
import { Route } from "react-router-dom";
import '../styles/Decks.css'
import About from "./decks/About";
import Reblog from "./decks/Reblog";
import Contact from "./decks/Contact";


function Decks() {
  return (
    <div className="Decks">
      <Route exact path="/" render={() => <About />} />
      <Route exact path="/about" render={() => <About />} />
      <Route exact path="/reblog" render={() => <Reblog />} />
      <Route exact path="/contact" render={() => <Contact />} />
    </div>
  );
}

export default Decks;