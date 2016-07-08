import React from "react";
import Radium, { Style, StyleRoot } from "radium";
import ga from "react-ga";
import { Header } from "formidable-landers";

// base stylesheet
import stylesheet from "../radium-stylesheet";
import theme from "../radium-theme";

class App extends React.Component {
  componentDidMount() {
    ga.initialize("UA-43290258-1");
  }

  getStyles() {
    return {
      headerLink: {
        color: theme.lightGray,
        fontFamily: theme.monospace,
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        transition: "color 0.195s ease-in",
        textDecoration: "none",
        ":hover": {
          color: theme.white,
          transition: "color 0.225s ease-out"
        }
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <StyleRoot style={{display: "flex", flexDirection: "column", height: "100%"}}>
        <Header
          background={theme.charcoal}
          linkStyles={styles.headerLink}
          styleOverrides={{padding: "1.5rem"}}
        />
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
