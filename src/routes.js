import React from "react";
import { Route, IndexRoute, Redirect } from "react-router";

// Components
import App from "./components/app";
import Home from "./views/home/index";
import Docs from "./views/docs/index";

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/docs/:document" component={Docs} />
    <Redirect from="/docs" to="/docs/getting-started" />
  </Route>
);
