import React from "react";
import { Route, IndexRoute } from "react-router";

// Components
import App from "./components/app";
import Home from "./views/home";
import Docs from "./views/docs";

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/docs" component={Docs} />
  </Route>
);
