import React from "react";
import { render } from "react-dom";
import Home from "./pages/home/homeView";
import { homeBloc } from "./blocs";

render(
  <div>
    <Home bloc={homeBloc} />
    <Home bloc={homeBloc} />
  </div>,
  document.getElementById("root")
);


