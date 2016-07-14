import React from "react";
import { render } from "react-dom";
import { renderToString } from "react-dom/server";
import { Router, RouterContext, match, applyRouterMiddleware, browserHistory } from "react-router";
import { createMemoryHistory } from "history";
import useScroll from "react-router-scroll";

const routing = {
  base: process.env.NODE_ENV === "production" ? "/open-source/radium/" : "/"
};

import Index from "../../templates/index.hbs";
import routes from "../routes";

// Client render (optional):
// `static-site-generator-webpack-plugin` supports shimming browser globals
// so instead of checking whether the document is undefined (always false),
// Check whether it’s being shimmed
if (typeof window !== "undefined" && window.__STATIC_GENERATOR !== true) { //eslint-disable-line no-undef
  render(
    <Router
      history={browserHistory}
      routes={routes}
      render={applyRouterMiddleware(useScroll())}
    />,
    document.getElementById("content")
  );
}

/* eslint-disable no-console*/
// Exported static site renderer:
export default (locals, callback) => {
  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);
  match({ routes, location }, (error, redirectLocation, renderProps) => {
    callback(null, Index({
      content: renderToString(<RouterContext {...renderProps} />),
      bundleJs: locals.assets.main,
      baseHref: routing.base
    }));
  });
};
