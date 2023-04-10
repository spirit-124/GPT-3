import React from "react";

import { Cta, NavBar, Brand } from "./components";
import {
  Features,
  Possiblities,
  WhatGPT3,
  Blog,
  Footer,
  Header,
} from "./containers";

import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        hello is there any one??
        <NavBar />
        <Header />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possiblities />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
