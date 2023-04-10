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

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        hello is there any one??
        <NavBar />
        <Header />
        <div className="">
          <Brand />
          <WhatGPT3 />
          <Features />
          <Possiblities />
          <Cta />
          <Blog />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
