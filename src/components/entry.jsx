import React from "react";
import { render } from "react-dom";
import { Router, useRouterHistory, browserHistory, applyRouterMiddleware } from "react-router";
import useScroll from "react-router-scroll";
import routes from "../routes";
import { useBasename } from "history";
import createBrowserHistory from "history/lib/createBrowserHistory";

let history = browserHistory;

if (process.env.NODE_ENV === "production") {
  history = useRouterHistory(useBasename(createBrowserHistory))({
    basename: "/open-source/radium"
  });
}

render(
  <Router
    history={history}
    routes={routes}
    render={applyRouterMiddleware(useScroll())}
  />,
  document.getElementById("content")
);
