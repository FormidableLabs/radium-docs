import React from "react";
import { render } from "react-dom";
import { Router, useRouterHistory, applyRouterMiddleware } from "react-router";
import useScroll from "react-router-scroll";
import routes from "../routes";
import { useBasename } from "history";
import createBrowserHistory from "history/lib/createBrowserHistory";

const history = useRouterHistory(useBasename(createBrowserHistory))({
  basename: "/"
});

render(
  <Router
    history={history}
    routes={routes}
    render={applyRouterMiddleware(useScroll())}
  />,
  document.getElementById("content")
);
