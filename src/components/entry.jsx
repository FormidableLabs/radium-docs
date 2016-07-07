import React from "react";
import { render } from "react-dom";
import { Router, browserHistory, applyRouterMiddleware } from "react-router";
import useScroll from "react-router-scroll";
import routes from "../routes";

render(
  <Router
    history={browserHistory}
    routes={routes}
    render={applyRouterMiddleware(useScroll())}
  />,
  document.getElementById("content")
);
