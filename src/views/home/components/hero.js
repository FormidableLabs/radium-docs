import React from "react";
import Radium from "radium";

import RadLink from "../../../components/hyperlink";
import theme from "../../../radium-theme";
import RADLOGO from "../../../../static/logo.svg";
import GITHUBLOGO from "../../../../static/logo-github.svg";

class Hero extends React.Component {
  getHeroStyles() {
    return {
      header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "580px",
        height: "80vh",
        padding: "5% .5rem 1rem",
        backgroundColor: "#050505",
        backgroundImage: "url(./static/bg-radium.jpg)",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        [`@media ${theme.mediaSizes.medium}`]: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          minHeight: "650px",
          padding: "10% 1rem 2rem"
        }
      },
      intro: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        flexWrap: "wrap",
        margin: "auto",
        padding: 0,
        width: "auto",
        [`@media ${theme.mediaSizes.medium}`]: {
          flexWrap: "nowrap",
          flexDirection: "row",
          justifyContent: "space-between"
        }
      },
      logo: {
        maxWidth: "180px",
        margin: "0 auto",
        [`@media ${theme.mediaSizes.medium}`]: {
          maxWidth: "initial",
          flex: "0 1 360px",
          margin: "0 3.75rem 0 0"
        }
      },
      copy: {
        textAlign: "center",
        color: theme.white,
        flex: "1 1 auto",
        [`@media ${theme.mediaSizes.medium}`]: {
          textAlign: "left"
        }
      },
      heading: {
        margin: "0em",
        fontFamily: theme.sansSerif,
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        [`@media ${theme.mediaSizes.medium}`]: {
          margin: ".25em 0"
        }
      },
      paragraph: {
        fontFamily: theme.monospace,
        fontSize: "0.875rem",
        lineHeight: "1.5",
        maxWidth: "30em",
        margin: "0 auto",
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased"
      },
      installer: {
        backgroundColor: theme.charcoal,
        margin: "2rem auto",
        padding: "1em",
        maxWidth: "30em",
        textAlign: "center",
        [`@media ${theme.mediaSizes.medium}`]: {
          margin: "2rem 0 5rem",
          padding: "2em"
        }
      },
      installerHeading: {
        color: theme.white,
        fontFamily: theme.monospace,
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        fontWeight: "normal",
        fontSize: "1.125rem",
        lineHeight: 1.2,
        margin: 0
      },
      nav: {
        marginTop: "auto",
        maxWidth: "840px",
        width: "100%"
      },
      navList: {
        color: theme.white,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        fontFamily: theme.monospace,
        margin: 0,
        padding: 0,
        width: "100%",
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        justifyContent: "space-between",
        letterSpacing: "0.09em",
        listStyle: "none",
        textTransform: "uppercase",
        [`@media ${theme.mediaSizes.medium}`]: {
          margin: "1rem -1.5em"
        }
      },
      navListItem: {
        padding: "1em",
        fontSize: "12px",
        [`@media ${theme.mediaSizes.medium}`]: {
          padding: "1.5em",
          fontSize: "14px"
        }
      },
      logoGithub: {
        color: "inherit",
        display: "inline-block",
        marginRight: "8px",
        width: "18px",
        verticalAlign: "middle"
      }
    };
  }

  render() {
    const styles = this.getHeroStyles();

    return (
      <header style={styles.header}>
        <div style={styles.intro}>
          <div style={styles.logo} dangerouslySetInnerHTML={{__html: RADLOGO}} />
          <div style={styles.copy}>
            <h1 style={styles.heading}>Radium</h1>
            <p style={styles.paragraph}>Radium is a set of tools to manage inline styles on React elements. It gives you powerful styling capabilities without CSS.</p>
            <div style={styles.installer}>
              <h2 style={styles.installerHeading}>npm install radium</h2>
            </div>
          </div>
        </div>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navListItem}>
              <RadLink destination="external" href="https://github.com/FormidableLabs/radium" theme="onDark">
                <span style={styles.logoGithub} dangerouslySetInnerHTML={{__html: GITHUBLOGO}} />
                GitHub Project
              </RadLink>
            </li>
            <li style={styles.navListItem}>
              <RadLink destination="internal" href="/docs/guide" theme="onDark">
                Using Radium
              </RadLink>
            </li>
            <li style={styles.navListItem}>
              <RadLink destination="internal" href="/docs/api" theme="onDark">
                API Docs
              </RadLink>
            </li>
            <li style={styles.navListItem}>
              <RadLink destination="internal" href="/docs/faq" theme="onDark">
                F.A.Q.
              </RadLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Radium(Hero);
