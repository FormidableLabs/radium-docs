import React from "react";
import Radium, { Style, StyleRoot } from "radium";
import ga from "react-ga";

// Child components
import Docs from "./docs";
import Hero from "./hero";
import { Header, Footer } from "formidable-landers";

// Variables
import settings from "../radium-settings";
import stylesheet from "../radium-styles";

class App extends React.Component {
  componentDidMount() {
    ga.initialize("UA-43290258-1");
  }

  getStyles() {
    return {
      headerLink: {
        color: settings.lightGray,
        fontFamily: settings.monospace,
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        transition: "color 0.195s ease-in",
        textDecoration: "none",
        ":hover": {
          color: settings.white,
          transition: "color 0.225s ease-out"
        }
      },
      footerLink: {
        color: settings.red,
        transition: "color 0.195s ease-in",
        textDecoration: "none",
        ":hover": {
          color: settings.black,
          transition: "color 0.225s ease-out"
        }
      },
      footer: {
        fontFamily: settings.monospace,
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
          backgroundColor={settings.charcoal}
          linkStyles={styles.headerLink}
          styleOverrides={{padding: "1.5rem"}}
        />
        <Hero />
        <main>
          <Docs />
        </main>
        <Footer
          backgroundColor={settings.lightGray}
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

export default Radium(App);
