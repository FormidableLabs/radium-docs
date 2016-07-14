import React from "react";
import { Route, IndexRoute } from "react-router";

// Components
import App from "./components/app";
import Home from "./views/home/index";
import Docs from "./views/docs/index";

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/docs" component={Docs} />
    <Route path="/docs/:document" component={Docs} />
  </Route>
);
