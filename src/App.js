import React from "react";

import { Footer, Features, Header, Portfolio } from "./containers";
import { Brand, Navbar } from "./components";

import "./App.css";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>

    <Portfolio />
    <Features />
    <Brand />
    <Footer />
  </div>
);

export default App;
