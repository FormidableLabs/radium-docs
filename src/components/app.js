import React from "react";
import Radium, { Style, StyleRoot } from "radium";
import ga from "react-ga";

// base stylesheet
import stylesheet from "../radium-stylesheet";
import theme from "../radium-theme";

class App extends React.Component {
  componentDidMount() {
    ga.initialize("UA-43290258-1");
  }

  render() {
    return (
      <StyleRoot style={{display: "flex", flexDirection: "column", height: "100%"}}>
        {this.props.children}
        <Style rules={stylesheet} />
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
