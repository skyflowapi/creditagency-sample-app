import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Home from "./components/Home/index";
import { Router, HashRouter, BrowserRouter } from "react-router-dom";
import Skyflow from "./services/Skyflow";

ReactDOM.render(
  <Skyflow>
    <HashRouter>
      <App />
    </HashRouter>
  </Skyflow>,
  document.getElementById("app")
);
