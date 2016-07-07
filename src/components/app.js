import React from "react";
import Radium, { Style, StyleRoot } from "radium";
import ga from "react-ga";
import { Header, Footer } from "formidable-landers";

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
      },
      footerLink: {
        color: theme.red,
        transition: "color 0.195s ease-in",
        textDecoration: "none",
        ":hover": {
          color: theme.black,
          transition: "color 0.225s ease-out"
        }
      },
      footer: {
        fontFamily: theme.monospace,
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        fontSize: "16px",
        letterSpacing: "normal",
        padding: "4em 1em"
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <StyleRoot>
        <Header
          background={theme.charcoal}
          linkStyles={styles.headerLink}
          styleOverrides={{padding: "1.5rem"}}
        />
        <main role="main">
          {this.props.children}
        </main>
        <Footer
          background={theme.lightGray}
          logoColor="black"
          linkStyles={styles.footerLink}
          styleOverrides={styles.footer}
        >
          <p style={{marginTop: "2.5em", fontSize: "14px"}}>Radium is a trademark of Formidable Labs, Inc.</p>
        </Footer>
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
