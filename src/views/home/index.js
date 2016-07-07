import React from "react";
import Radium from "radium";
import RadiumLink from "../../components/hyperlink";

import settings from "../../radium-settings";

// Child components
import Hero from "../../components/hero";
import { Header, Footer } from "formidable-landers";

class Home extends React.Component {
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
      <div>
        <Header
          background={settings.charcoal}
          linkStyles={styles.headerLink}
          styleOverrides={{padding: "1.5rem"}}
        />
        <Hero />
        <RadiumLink
          destination="internal"
          href="/docs"
        >
        Docs
        </RadiumLink>
        <Footer
          background={settings.lightGray}
          logoColor="black"
          linkStyles={styles.footerLink}
          styleOverrides={styles.footer}
        >
          <p style={{marginTop: "2.5em", fontSize: "14px"}}>Radium is a trademark of Formidable Labs, Inc.</p>
        </Footer>
      </div>
    );
  }
}

export default Radium(Home);
