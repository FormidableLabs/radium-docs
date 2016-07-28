import React from "react";
import Radium, { Style, StyleRoot } from "radium";
import ga from "react-ga";

// base stylesheet
import stylesheet from "../radium-stylesheet";

class App extends React.Component {
  componentDidMount() {
    ga.initialize("UA-43290258-1");
  }

  render() {
    const isBrowser = typeof window !== "undefined" && window.__STATIC_GENERATOR !== true;
    return (
      <StyleRoot
        radiumConfig={isBrowser ? { userAgent: window.navigator.userAgent } : null}
        style={{display: "flex", flexDirection: "column", height: "100%"}}
      >
        <Style rules={stylesheet} />
        {this.props.children}
      </StyleRoot>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.func,
    React.PropTypes.node,
    React.PropTypes.element
  ])
};

export default Radium(App);
